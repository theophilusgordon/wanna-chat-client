import AdminPhoto from '../images/lizzy.jpeg';

function Footer() {
  return (
    <footer className="footer">
       <div className="admin">
        <div className="admin-image">
          <img src={AdminPhoto} alt="Admin" />
        </div>
        <div className="admin-text">
          <h3>Lizzy Koomson</h3>
          <p>👋Hey there, How can I help you...?</p>
        </div>
      </div>
      <p>&copy; 2022 All Rights Reserved</p>
    </footer>
  )
}

export default Footer