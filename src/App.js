import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  
  var [newclass, setNewclass] = useState([]);
  useEffect(() => {
    setNewclass([
      {
        id: 1,
        classname: "英语",
        classtime: 30,
        boxelse: [
          {
            elsename: "选择题",
            elsetime: 10
          },
          {
            elsename: "填空题",
            elsetime: 20
          }
        ]
      },
      {
        id: 2,
        classname: "数学",
        classtime: 101,
        boxelse: [
          {
            elsename: "选择题",
            elsetime: 20
          },
          {
            elsename: "填空题",
            elsetime: 30
          }
        ]
      }
    ]);
  }, []);
  

  return (
    <div className="App">
      <div className='title'>
        <div className='bigtitle'>细分任务倒计时</div>
        <div className='newclass'>
          <button>添加任务</button>
        </div>
      </div>
      <div className='main'>
        {
          newclass.map(item => (
            <div className='mainbox' key={item.id}>
              <div className='boxtop'>
                <div className='boxname'>{item.classname}</div>
                <div className='boxtime'>总时长: {item.classtime}min</div>
              </div>
              {
                item.boxelse.map((elseitem, elseindex) => (
                  <div className='boxelse' key={elseindex}>
                    <div className='elsename'>{elseitem.elsename}</div>
                    <div className='elsetime'>时长: {elseitem.elsetime}min</div>
                  </div>
                ))
              }
            </div>
          ))
        }
        
      </div>
    </div>
  );
}

export default App;
