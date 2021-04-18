import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [commentText, setCommentText] = useState('')
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8080/api/get').then((response) => {
      setCommentList(response.data)
    });
  }, []);

  const submitComment = () => {
    Axios.post('http://localhost:8080/api/addcomment', {
      commentText: commentText
    });

    setCommentList((commentList) => {
      return [
        ...commentList,
        { comment: commentText }
      ]
    });

    document.getElementById('txtComment').value='';
    document.getElementById('txtComment').focus();
  };

  const TTS = (text) => {
    Axios.post('http://localhost:8080/api/tts', { text: text })
    .then((res) => {
      playAudio(toArrayBuffer(res.data.buffer.data));
    }).catch((e) => {
      console.log(e);
    });
  };

  const toArrayBuffer = (buffer) => {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
      view[i] = buffer[i];
    }
    return ab;
  };

  const playAudio = (arrayBuffer) => {
    let audioContext = new AudioContext();
    let outputSource;

    try {
      if (arrayBuffer.byteLength > 0) {
        audioContext.decodeAudioData(arrayBuffer,
        function(buffer){
          audioContext.resume();
          outputSource = audioContext.createBufferSource();
          outputSource.connect(audioContext.destination);
          outputSource.buffer = buffer;
          outputSource.start(0);
        },
        function() {
          console.log(arguments);
        });
      }
    } catch(e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <div className="Header">
        <h1>SMARKIO - TESTE TÉCNICO - IBM WATSON TTS</h1>
      </div>

      <div className="Container">
        <div className="Form">
          <h2>COMENTAR</h2>
          <textarea id="txtComment" name="txtComment" onChange={(e) => {
            e.preventDefault()
            setCommentText(e.target.value)
          }} />
          <button onClick={submitComment}>Enviar</button>
        </div>

        <div className="Separator"></div>

        <div className="Comments">
          <h2>COMENTÁRIOS</h2>
          {commentList.map((val) => {
            return(
              <div className="Comment">
                <p>{val.comment}</p>
                <button onClick={() => TTS(val.comment)}>Ouvir</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;