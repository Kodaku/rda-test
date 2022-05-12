import request from "supertest";
import { BASE_URL } from "../../../constants";

it("create all the questions", async () => {
    const response = await request(BASE_URL)
        .get("/api/questions/create")
        .send({})
        .expect(200);

    // console.log(response.body);
});

it("create a question and then delete it", async () => {
    const response = await request(BASE_URL)
        .post("/api/questions/add")
        .send({
            questionId: 800,
            questionText: "Test question",
            questionCategory: "Regola 1",
            wrongOptions: [
                "1.3X38AP8SZ336T4P5V6WU9ZARZGCBH4E6",
                "2.3SQ9RNRAC119OJBK74L20IY5LH69Q",
            ],
            correctOptions: "3.dkejekljflrjflwj",
            questionOptions: [
                "1.3X38AP8SZ336T4P5V6WU9ZARZGCBH4E6",
                "2.3SQ9RNRAC119OJBK74L20IY5LH69Q",
                "3.dkejekljflrjflwj",
            ],
            answerLink: "link",
        })
        .expect(201);

    // console.log(response.body);

    const deleteResponse = await request(BASE_URL)
        .get("/api/questions/delete/800")
        .send({})
        .expect(200);

    // console.log(deleteResponse.body);
});

// it("Testing an external API", async () => {
//     const response = await request("https://swapi.dev/api")
//         .get("/people/1")
//         .send({})
//         .expect(200);

//     console.log(response.body);
// });
