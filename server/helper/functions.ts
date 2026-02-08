import { prisma } from "../lib/prisma";

const checkIfUserPresent = async (email: string) => {
  try{
    const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (!user) {
    return {isPresent: false};
  }
  return {isPresent: true,user};

  }catch(e){
    return {isPresent: false}
  }
};


export {checkIfUserPresent}