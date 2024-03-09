import React, {useEffect, useState} from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import style from './TodoList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark, faBan, faPenToSquare, faLock, faLockOpen} from '@fortawesome/free-solid-svg-icons'

export default function TodoList({todo, setTodo}) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo)

    useEffect(() => {
        setFiltered(todo)
    }, [todo])

    function todoFilter(status) {
        if(status === 'all') {
            setFiltered(todo)
        } else {
            const newTodo = [...todo].filter(item => item.status === status)
            setFiltered(newTodo)
        }
    }

    function deleteTodo(id) {
        const newTodo = [...todo].filter(item => item.id !==id)
        setTodo(newTodo)
    }

    function statusTodo(id) {
        const newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
    }

    function saveTodo(id) {
        const newTodo = [...todo].map(item => {
            if(item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

  return (
        <div> 
            <Row>
                <Col className={style.filter}>
            <div class="btn-group" role="group" aria-label="Basic example" className={style.btns}>
                <button type="button" class="btn btn-outline-primary" onClick={() => todoFilter('all')}>Все</button>
                <button type="button" class="btn btn-outline-primary" onClick={() => todoFilter(true)}>Выполненные</button>
                <button type="button" class="btn btn-outline-primary" onClick={() => todoFilter(false)}>Невыполненные</button>
        </div>
            </Col>
        </Row>
        {
            filtered.map(item => (
                <div key={item.id} className={style.listItems}> 
                {
                    edit === item.id ? 
                        <div>
                            <input value={value} onChange={(e) => setValue(e.target.value)}/>
                        </div> :
                        <div className={!item.status ? style.close : ''}> {item.title} </div>
                }

                {
                    edit === item.id ?
                    <div>
                            <Button onClick={() => saveTodo(item.id)} size="sm" className={style.btn}> <FontAwesomeIcon icon={faBookmark} /> </Button>
                    </div> :
                    <div>
                        <Button onClick={() => deleteTodo(item.id)} size="sm"  className={style.btn}> <FontAwesomeIcon icon={faBan} /> </Button>

                        <Button onClick={() => editTodo(item.id)} size="sm" className={style.btn}> <FontAwesomeIcon icon={faPenToSquare} /> </Button>

                        <Button onClick={() => statusTodo(item.id)} size="sm"  className={style.btn}>
                                {
                                    item.status ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faLockOpen} />
                                }
                             </Button>
                    </div>
                }
                </div>
            ))
        } 
    </div>
  )
}
