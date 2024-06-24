import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ActualitSController } from "../actualitS.controller";
import { ActualitSService } from "../actualitS.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  contenu: "exampleContenu",
  createdAt: new Date(),
  dateDePublication: new Date(),
  id: "exampleId",
  titre: "exampleTitre",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  contenu: "exampleContenu",
  createdAt: new Date(),
  dateDePublication: new Date(),
  id: "exampleId",
  titre: "exampleTitre",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    contenu: "exampleContenu",
    createdAt: new Date(),
    dateDePublication: new Date(),
    id: "exampleId",
    titre: "exampleTitre",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  contenu: "exampleContenu",
  createdAt: new Date(),
  dateDePublication: new Date(),
  id: "exampleId",
  titre: "exampleTitre",
  updatedAt: new Date(),
};

const service = {
  createActualitS() {
    return CREATE_RESULT;
  },
  actualitSItems: () => FIND_MANY_RESULT,
  actualitS: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("ActualitS", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ActualitSService,
          useValue: service,
        },
      ],
      controllers: [ActualitSController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /actualitS", async () => {
    await request(app.getHttpServer())
      .post("/actualitS")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateDePublication: CREATE_RESULT.dateDePublication.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /actualitS", async () => {
    await request(app.getHttpServer())
      .get("/actualitS")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateDePublication:
            FIND_MANY_RESULT[0].dateDePublication.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /actualitS/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/actualitS"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /actualitS/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/actualitS"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateDePublication: FIND_ONE_RESULT.dateDePublication.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /actualitS existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/actualitS")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateDePublication: CREATE_RESULT.dateDePublication.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/actualitS")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
