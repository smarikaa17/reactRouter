

export const githubInfoLoader= async () => {
       const response= await  fetch("https://api.github.com/users/smarikaa17")
       return response.json()
}