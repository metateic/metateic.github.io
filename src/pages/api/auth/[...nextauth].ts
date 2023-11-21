import NextAuth from "next-auth";

import { authOptions } from "metateic/server/auth";

export default NextAuth(authOptions);
