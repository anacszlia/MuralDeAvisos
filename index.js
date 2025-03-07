const express=require('express')
const path=require("path")
const app= express()
const apiRouter=require("./routes/api")

app.use('/',express.static(path.join(__dirname,"public")))
app.use('/api',apiRouter)

const PORT=3000


app.listen(PORT,()=>{
	console.log("Server running on port ",PORT)
})