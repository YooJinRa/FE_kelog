import React, { useState } from 'react';
import styled from 'styled-components';

const PostTag = ({ tagList, setTagList }) => {
  const [ tagInputs, setTagInputs ] = useState('');

  const onChangePostTag = (event) => {
    // :: 중복 테그 있는지 체크!!!!!
    tagList.map((tag) => {
      tag === event.target.value && 
        console.log("같은 태그를 쓰시면 안돼요!");
        // keypressEvent 막기
        // event.target.removeEventListener('keypress', onKeyDownPostTag);
    });
    setTagInputs(event.target.value);
  }

  // :: 태그 입력
  const onKeyDownPostTag = (event) => {
    if(event.key === 'Enter') {
      
      setTagList(
        [
        ...tagList,
        tagInputs
        ]
      );
      event.target.value = '';
    }
  }

  // :: 태그 클릭시 지우기
  const onRemovePostTag = (event) => {
    const removeTagList = tagList.splice(tagList.indexOf(event.target.id), 1);
    setTagList(tagList.filter((tag)=>(tag !== removeTagList)));
  }

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
    cursor: pointer;
    transition: 0.5ms;
  }
`;
