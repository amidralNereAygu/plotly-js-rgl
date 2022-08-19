// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { exec } from "child_process";

const handler = (req, res) => {
  const result = exec("bash shell/test.sh", (errot, stdout, stderr) => {
    return res.status(200).json({ name: "John Doe" });
  });
};

export default handler;
