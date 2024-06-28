import database from "infra/database.js";

function status(request, response) {
  response
    .status(200)
    .json({ chave: "Os alunos do curso dev são acima da média" });
}
export default status;
