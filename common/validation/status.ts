const status = [
    {
        code: "RS_01",
        name: "FAILURE",
        value: false
    },
    {
        code: "RS_02",
        name: "SUCCESS",
        value: true
    }
]
export const checkStatus = (code: any) => {
    const filteredStatus = status.filter((status) => status.code === code);
    return filteredStatus[0]?.value;
};