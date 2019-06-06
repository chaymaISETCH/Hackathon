import React from 'react';
import "./Editor.css";
import { Input } from 'reactstrap';

const Language=({languagesList})=> {
  
  return (
    <div>
        
        <Input type="select" className="choose-language">
              <option>Choose Language :</option>
              {languagesList.map(l=><option key={l}>{l}</option>)}
        </Input>
        
    </div>
  );
}

export default Language;
