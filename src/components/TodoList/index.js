import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import {  todoRemainingSelector } from '../../redux/selectors';

export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')

  // const todoList = useSelector(todoListSelector)
  const todoLists = useSelector(todoRemainingSelector)
  // const searchText = useSelector(searchTextSelector)
  
  
  const dispatch = useDispatch();
  

  const handleAddButtonClick = () => {
    dispatch(addTodo({
      id: uuidv4(),
      name:todoName,
      priority: priority,
      completed: false
    }));

    setPriority('Low')
    setTodoName('')
  };

  
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoLists.map(todo => <Todo key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed}/>)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={(e) => setTodoName(e.target.value)} />
          <Select defaultValue='Medium' value={priority} onChange={(e) => setPriority(e)}>
            <Select.Option value='High' label='High'>
              <Tag color='pink'>High</Tag> 
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='black'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
