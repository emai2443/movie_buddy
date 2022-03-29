import {CognitoUserPool} from "amazon-cognito-identity-js";
const poolData = {
    UserPoolId: "us-east-1_wE93IPKpu",
    ClientId: "4t02p6o2fanr26a5c5c7um4f8p",
}
export default new CognitoUserPool(poolData);