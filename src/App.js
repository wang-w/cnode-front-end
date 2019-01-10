import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    // const data = {
    //   limit: 5,
    //   page: 2,
    // };
    fetch('http://localhost:7001/name?limit=5&page=1', {
      method: 'GET',
    })
      .then((response) => {
        console.log(response.json, 123456);
          return response.json();
      })
      .then((result) => {
          console.log(result, 333);
          this.setState({
            data: result.list
          })
      });
  }

  bindEventAdd() {
    console.log('添加信息')
  }

  render() {
    const app = {
      padding: '20px',
    };
    const table = {
      width: '100%',
      borderCollapse: 'collapse',
      textAlign: 'center',
    };
    const appTitle = {
      margin: '20px 0',
    };
    const itemStyle = {
      border: '1px solid #ccc',
      padding: '20px'
    };
    const appAdd = {
      margin: '20px 0',
    };
    return (
      <div style={app}>
        <div style={appTitle}>学生管理系统</div>
        <div style={appAdd}><button onClick={this.bindEventAdd}>添加记录</button></div>
        <table style={table}>
          <tbody>
          <tr>
            <td style={itemStyle}>学号</td>
            <td style={itemStyle}>姓名</td>
            <td style={itemStyle}>性别</td>
            <td style={itemStyle}>年龄</td>
            <td style={itemStyle}>身份证</td>
            <td style={itemStyle} colSpan='2'>操作</td>
          </tr>
            {
              this.state.data.map((item) => {
                return (
                  <tr key={item._id}>
                    <td style={itemStyle}>11111111</td>
                    <td style={itemStyle}>{item.name}</td>
                    <td style={itemStyle}>{item.sex}</td>
                    <td style={itemStyle}>{item.age}</td>
                    <td style={itemStyle}>341122</td>
                    <td style={itemStyle}>
                      <button>修改</button>
                    </td>
                    <td style={itemStyle}>
                      <button>删除</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
