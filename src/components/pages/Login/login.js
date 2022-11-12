import React from 'react';
import './login.css';
import "antd/dist/antd.css";

const antd = window.antd;

function Login(){
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src="" alt="Login"/>
        </div>
        <antd.Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Welcome back</p>
          <p>Login to the Dashboard</p>
          <antd.Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <antd.Input
              placeholder="Username"
            />
          </antd.Form.Item>

          <antd.Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <antd.Input.Password 
              placeholder="Password"
            />
          </antd.Form.Item>

          <antd.Form.Item name="remember" valuePropName="checked">
            <antd.Checkbox>Remember me</antd.Checkbox>
          </antd.Form.Item>

          <antd.Form.Item>
            <antd.Button type="primary" htmlType="submit" className="login-form-button">
              LOGIN
            </antd.Button>
          </antd.Form.Item>
        </antd.Form>
      </div>
    </div>
  );
};

export default Login;