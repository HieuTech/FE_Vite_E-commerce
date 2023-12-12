import React, { useEffect } from "react";

const ChatPlugin = () => {
  useEffect(() => {
    // Mã JavaScript để khởi tạo plugin chat
    const chatbox = document.getElementById("fb-customer-chat");
    chatbox.setAttribute("page_id", "110639638188498");
    chatbox.setAttribute("attribution", "biz_inbox");

    // Mã JavaScript để khởi tạo SDK
    window.fbAsyncInit = () => {
      FB.init({
        xfbml: true,
        version: "v18.0",
      });
    };

    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
};

export default ChatPlugin;
