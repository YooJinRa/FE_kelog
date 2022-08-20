import React, { useState } from 'react';
import styled from 'styled-components';

const PostTag = ({ tagList, setTagList }) => {
  const [ tagInputs, setTagInputs ] = useState('');


  const onChangePostTag = (event) => {
    setTagInputs(event.target.value);
  }
  const onKeyDownPostTag = (event) => {
    if(event.key === 'Enter') {
      console.log("enter~~~~");
      setTagList(
        [
        ...tagList,
        tagInputs
        ]
      );
      event.target.value = '';
    }
  }

  const onRemovePostTag = (event) => {
    console.log("이거 지우고 싶어~!", event.target.id);
    console.log(tagList.indexOf(event.target.id));
    //tagList.splice(tagList.indexOf(event.target.id), 1);
    //const removeTagList = tagList.splice(tagList.indexOf(event.target.id), 1);
    //setTagList();
    //setTagList(tagList.slice(tagList.indexOf(event.target.id), tagList.indexOf(event.target.id)+1));

    //console.log("없어졌나", tagList);
  }

  // console.log("tagList", tagList);
  return (
    <StPostTagWrap>
      <input 
        type="text" 
        onChange={onChangePostTag}
        onKeyPress={onKeyDownPostTag}
        placeholder="태그를 입력해주세요" 
      />
      <StPostTagRow>
        {
          tagList &&
            tagList.map((tag, index) => (
              <span 
                key={tag+index}
                id={tag}
                onClick={onRemovePostTag}
              >
                {tag}
              </span>
            ))
        }
      </StPostTagRow>
    </StPostTagWrap>
  );
};

export default PostTag;

const StPostTagWrap = styled.div`
  input {
    width: 100%;
    margin-bottom: 0.8rem;
    padding: 0.5rem 0.875rem;
    font-size: 1.125rem;
    color: var(--title-color);
    border: none;
    background: var(--subBg-color);
    box-shadow: var(--shadow-style);
    outline: none;
  }
`;

const StPostTagRow = styled.div`
  width:100%;
  line-height: 2.3rem;
  margin-bottom: 1rem;
  word-wrap: break-all;
  span {
    display:inline-block;
    height: 2rem;
    font-size: 1rem;
    line-height: 2rem;
    color: var(--primary-color);
    border-radius: 1rem;
    background-color: var(--bg-color);
    padding: 0 1rem;
    margin-right: 1rem;
  }
`;
