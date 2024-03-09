import React, {useState} from 'react'
import {v4 as uuid} from "uuid"
import { Row, Col, Button, FormControl } from 'react-bootstrap'
import style from './AddTodo.module.css'

export default function AddTodo({todo, setTodo}) {

    const [value, setValue] = useState('')

    function saveTodo() {
        if(value) {
        setTodo(
            [...todo, {
                id: uuid.v4,
                title: value,
                status: true
            }]
        )
        setValue('')
        }
    }

  return (
    <Row> 
        <Col className={style.AddTodoForm}>
            <FormControl placeholder='Введите дело' value={value} onChange={(e) => setValue(e.target.value)}/>
            <Button className={style.btn} size="sm"  onClick={saveTodo} > Сохранить </Button>
        </Col>
    </Row>
  )
}
