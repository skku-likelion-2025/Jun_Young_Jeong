import { useState } from "react";
import { sendPasswordResetEmail} from "firebase/auth";
import { styled } from "styled-components";
import { auth } from "../firebase";


const Button = styled.span`
  margin-top: 20px;
  background-color: white;
  font-weight: 500;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default function ForgotPassword() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const onClick = () => setShowModal(true);

  const onSend = async () => {
    if (!email) {
      alert("email");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("mail send");
      setShowModal(false);
      setEmail("");
    } catch (error: any) {
      alert("failed: " + error.message);
    }
  };

  return (
    <>
      <Button onClick={onClick}>Forgot Password?</Button>

      {showModal && (
        <ModalBackground onClick={() => setShowModal(false)}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <h3>비밀번호 재설정</h3>
            <input
              type="email"
              placeholder="이메일 입력"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
            <Button onClick={onSend}>메일 전송</Button>
          </ModalBox>
        </ModalBackground>
      )}
    </>
  );
}
