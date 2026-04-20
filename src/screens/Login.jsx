import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ShoppingBasket } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('alex.chen@university.edu');
  const [password, setPassword] = useState('********');

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff', padding: '40px 24px', position: 'relative', overflow: 'hidden' }}>
      
      <div className="flex-col items-center" style={{ marginTop: '40px', textAlign: 'center' }}>
        <div style={{ width: '64px', height: '64px', backgroundColor: 'var(--primary-green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <ShoppingBasket size={32} color="white" />
        </div>
        <h2 style={{ fontSize: '28px', color: 'var(--text-dark)' }}>Grocery Budget Planner</h2>
        <p className="subtitle" style={{ fontSize: '14px', marginTop: '8px' }}>Smart shopping for smart students</p>
      </div>

      <form onSubmit={handleLogin} style={{ marginTop: '40px', flex: 1 }}>
        <div className="input-group relative">
          <Mail className="input-icon" size={20} />
          <input 
            type="email" 
            className="input-field" 
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group relative" style={{ marginTop: '20px' }}>
          <Lock className="input-icon" size={20} />
          <input 
            type="password" 
            className="input-field" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center" style={{ marginTop: '20px', fontSize: '14px' }}>
          <label className="flex items-center gap-2" style={{ color: 'var(--text-gray)' }}>
            <input type="checkbox" style={{ accentColor: 'var(--primary-green)', width: '16px', height: '16px' }} />
            Remember me
          </label>
          <a href="#" style={{ color: 'var(--primary-green)', textDecoration: 'none', fontWeight: '600' }}>Forgot password?</a>
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '32px' }}>
          Login to My Pantry
        </button>

        <p style={{ textAlign: 'center', marginTop: '24px', color: 'var(--text-gray)', fontSize: '14px' }}>
          Don't have an account? <a href="#" style={{ color: 'var(--primary-green)', textDecoration: 'none', fontWeight: '600' }}>Sign up</a>
        </p>
      </form>

      <div style={{ position: 'absolute', bottom: '-20px', left: 0, right: 0, height: '180px', backgroundImage: 'url(https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=600&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0, opacity: 0.9, borderRadius: '40px 40px 0 0' }}>
        {/* Decorative vegetables background */}
      </div>
    </div>
  );
};

export default Login;
