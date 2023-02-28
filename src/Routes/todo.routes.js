const { Router } = require("express")
const ToDo = require("../models/todo.models")

const router = Router();

router.get("/api/v1/todo", async (req,res)=>{
    try{
        const todo = await ToDo.findAll({
            attributes:["id", "title", "description", "status"]
        })
        res.json(todo)
       
    }
    catch(error){
        res.status(400).json(error)
    }
});


router.post("/api/v1/todo", async(req,res)=>{
    try{
        const newTask = req.body
        const result = await ToDo.create(newTask)
        res.status(201).send(result)
    }
    catch(error){
        res.status(400).json(error)
    }
})

router.delete("/api/v1/todo/:id", async(req,res)=>{
    try{
        const {id} = req.params;
        const result = await ToDo.destroy({
            where:{id}
        })
        res.status(204).send()

    }
    catch(error){
        res.status(400).json(error)

    }
})

router.put("/api/v1/todo/:id", async(req,res)=>{
    try{
        const {id} = req.params;
        const data = req.body;
        await ToDo.update(data,{
            where:{id}
        })
        res.status(204).send()

    }
    catch(error){
        res.status(400).json(error)

    }
});

module.exports = router;
