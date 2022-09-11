export const filterToObj = async (input) => {
    const obj = {}
    const res = await input.text()
    res.split(" ").forEach((it) => {
        if (it.includes("https") && !it.includes("https://static.xx")) {
            const username = it.replace("href=\"", "").split("\"")[0]
            obj[username] = "";
        }
    })
    return obj
}
