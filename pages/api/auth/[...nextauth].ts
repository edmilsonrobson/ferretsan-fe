import axios from "axios";
import { request } from "http";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const intercomClientId = process.env.INTERCOM_CLIENT_ID || "";
const intercomClientSecret = process.env.INTERCOM_CLIENT_SECRET || "";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        {
            id: "intercom",
            name: "Intercom",
            type: "oauth",
            clientId: intercomClientId,
            clientSecret: intercomClientSecret,
            authorization: {
                url: "https://app.intercom.com/oauth",
            },
            token: {
                url: "https://api.intercom.io/auth/eagle/token",

                async request(context) {
                    const url = "https://api.intercom.io/auth/eagle/token";
                    const params = {
                        client_id: intercomClientId,
                        client_secret: intercomClientSecret,
                        code: context.params.code,
                    };
                    const response = await axios.post(url, null, {
                        params,
                    });
                    const { data } = response;
                    return {
                        tokens: {
                            access_token: data.access_token,
                        },
                    };
                },
            },
            userinfo: {
                url: "https://api.intercom.io/me",
            },
            profile(profile) {
                return {
                    id: profile.id,
                    name: profile.name,
                    email: profile.email,
                    image: profile.avatar.image_url,
                };
            },
        },
        // ...add more providers here
    ],
});
