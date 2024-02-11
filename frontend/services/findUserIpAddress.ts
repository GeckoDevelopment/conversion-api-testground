export default async function findUserIpAddress() {
    try {
        const res = await fetch("/api/getUserIP");
        const data = await res.json();
        const ip = data.ip;
        console.log("This is the IP:", ip)
        return (ip);
    } catch(error) {
        console.log(error)
    }
}