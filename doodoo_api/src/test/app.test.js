const request = require("supertest");
const app = require("../config/express");

describe("auth functionality", () => {
    test("POST /register should return a JWT Token", async () => {
        const res = await request(app)
            .post("/api/v1/auth/register")
            .field("email", "carlos@gmail.com")
            .field("name", "Carlos")
            .field("password", "password")
            .field("image", "./person.jpg");
        // expect(res.headers["Content-Type"]).toMatch(/json/);
        //  expect(response.headers["Content-Type"]).toMatch(/json/);
        //  expect(response.status).toEqual(200);
        //  expect(response.body.email).toEqual("foo@bar.com");
    });
});

// equest(app)
//     .post("/")
//     .field("name", "my awesome avatar")
//     .field("complex_object", '{"attribute": "value"}', {
//         contentType: "application/json",
//     })
//     .attach("avatar", "test/fixtures/avatar.jpg");
