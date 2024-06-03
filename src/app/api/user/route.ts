import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(request: Request) {
  const {
    getAccessToken,
    getBooleanFlag,
    getFlag,
    getIdToken,
    getIntegerFlag,
    getOrganization,
    getPermission,
    getPermissions,
    getRoles,
    getStringFlag,
    getUser,
    getUserOrganizations,
    isAuthenticated
  } = getKindeServerSession();

  const data = {
    accessToken: await getAccessToken(),
    booleanFlag: await getBooleanFlag("bflag", false),
    flag: await getFlag("flag", "x", "s"),
    integerFlag: await getIntegerFlag("iflag", 99),
    organization: await getOrganization(),
    permission: await getPermission("eat:chips"),
    permissions: await getPermissions(),
    stringFlag: await getStringFlag("sflag", "test"),
    user: await getUser(),
    userOrganizations: await getUserOrganizations(),
    authenticated: await isAuthenticated()
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}