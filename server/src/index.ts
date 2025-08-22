import express from 'express'

const app = express()
const PORT = process.env.PORT || 4000

app.get("/", (req ,res) =>{
    res.json({
        message : "Welcome to the Portfolio Builder API powered by Mridul Pandey",
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})