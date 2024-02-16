const express=require('express')

const app=express()

app.use(express.json())

app.get("/", (req, res) => {
    
   

      
            res.json("Hello User")
        

    })

         



app.listen(3002, () => {

    console.log("listening");
})