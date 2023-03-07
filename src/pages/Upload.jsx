import React, { useState } from 'react';
import { useRef, useCallback } from 'react';
import {
  AiOutlineArrowUp,
  AiOutlineInfoCircle,
  AiOutlinePlus,
  AiOutlineWindows,
  AiOutlineCrown,
} from 'react-icons/ai';
import { IoIosPeople, IoIosInformationCircleOutline } from 'react-icons/io';
import { CiTrash } from 'react-icons/ci';
import styled from 'styled-components';
import useToggle from '../hooks/useToggle';

export default function Upload() {
  const [isUpload, setIsUpload] = useToggle();
  const inputRef = useRef();
  const onUploadImage = useCallback((e) => {
    if (!e.target.files) {
      return;
    }
    console.log(e.target.files[0]?.name);
    setIsUpload();
  }, []);
  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);
  return (
    <>
      <input
        style={{ display: 'none' }}
        onChange={onUploadImage}
        ref={inputRef}
        type="file"
        accept="image/jpg"
      ></input>
      <TitleBox>
        <span
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            fontSize: '21px',
            fontWeight: '700',
          }}
        >
          Upload
        </span>
      </TitleBox>
      {/* 스테이징 이전에 보일 것 */}

      {/* 스테이징 됐을때 보일 것 */}

      {/* 임시 */}
      {!isUpload ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            height: '85vh',
            background: '#F7F8FA',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#edf6fe',
              width: '100%',
              padding: '12px',
            }}
          >
            <IoIosPeople size="32"></IoIosPeople>
            <p style={{ paddingLeft: '16px' }}>
              You're on a free Pro membership trial! You have unlimited uploads
              for 10 more days.{' '}
              <span style={{ fontWeight: '700', color: 'rgb(127, 193, 255)' }}>
                Learn more about memberships
              </span>
            </p>
          </div>
          <div>
            <AiOutlineArrowUp
              style={{ marginTop: '32px' }}
              size="44"
            ></AiOutlineArrowUp>
          </div>
          <div
            style={{
              marginTop: '20px',
            }}
          >
            <span
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                fontSize: '21px',
                fontWeight: '800',
                letterSpacing: '.3px',
              }}
            >
              Upload photos
            </span>
          </div>
          <div>
            <BlueButton onClick={onUploadImageButtonClick}>
              Select photos
            </BlueButton>
          </div>

          <p style={{ marginTop: '28px' }}>
            Or drag and drop photos anywhere on this page
          </p>
          <div
            style={{
              padding: '16px',

              background: '#eeeff2',
              marginTop: '24px',
            }}
          >
            <div>
              <span style={{ fontWeight: '700' }}>Photo requirements</span>
              <div>.jpg only</div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                Max. photo dimensions are 200MP/megapixels
                <AiOutlineInfoCircle
                  size="16"
                  style={{ marginLeft: '8px' }}
                ></AiOutlineInfoCircle>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <span style={{ fontWeight: '700' }}>Licensing requirements</span>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                Min. photo dimensions are 3MP/megapixels
                <AiOutlineInfoCircle
                  size="16"
                  style={{ marginLeft: '8px' }}
                ></AiOutlineInfoCircle>
              </div>
              <div>No watermarks, logos, or borders</div>
              <div>No NSFW content</div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            // height: '85vh',
            // overflow: 'hidden',
            background: '#F7F8FA',
            padding: '24px 64px',
            gap: '24px',
          }}
        >
          <StBox>
            <BlueBox>
              <AiOutlineCrown size="30"></AiOutlineCrown>
              Over 6 million dollars in royalties paid to 500px photographers.
              Start earning today
            </BlueBox>
            <ButtonBox>
              <div style={{ display: 'flex' }}>
                <Button direction="left">
                  <AiOutlinePlus size="20" color="black"></AiOutlinePlus>Add
                </Button>
                <Button direction="left">
                  <CiTrash color="black" size="16"></CiTrash>Remove(1)
                </Button>
              </div>
              <div style={{ display: 'flex' }}>
                <Button direction="right">
                  <AiOutlineWindows size="20"></AiOutlineWindows>Select all
                </Button>
                <Button direction="right">
                  <AiOutlineWindows size="20"></AiOutlineWindows>Multi select
                </Button>
              </div>
            </ButtonBox>
          </StBox>
          <div
            style={{
              width: '360px',
              padding: '0 24px',
              background: 'white',
              border: '2px solid #EEEFF2',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '56px',
                fontWeight: '700',
              }}
            >
              1 photo selected
            </div>
            <BlueBox>
              <IoIosInformationCircleOutline size="30"></IoIosInformationCircleOutline>
              Keywords automatically applied.
              <IoIosInformationCircleOutline size="20"></IoIosInformationCircleOutline>
            </BlueBox>
            <div style={{ marginTop: '16px', display: 'flex' }}>
              <CheckBox type="checkbox"></CheckBox>
              <div style={{ marginLeft: '3px' }}>
                License this photo
                <IoIosInformationCircleOutline></IoIosInformationCircleOutline>
                <br></br>{' '}
                <span
                  style={{
                    fontSize: '.9rem',
                    color: '#787E83',
                    letterSpacing: '-0.2px',
                  }}
                >
                  Get paid for my photos with{' '}
                  <span style={{ color: '#0870d1' }}>500px Licensing.</span>
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '16px',
                fontSize: '.9rem',
                color: '#787E83',
              }}
            >
              * is required
            </div>
            <StBlock>
              <div
                style={{
                  fontSize: '.9rem',
                  color: '#787E83',
                  marginBottom: '4px',
                }}
              >
                Photo privacy
              </div>
              <div
                style={{
                  border: '1px solid #D7D8DB',
                  borderRadius: '4px',

                  fontSize: '.9rem',
                  color: '#787E83',
                  padding: '12px 16px',
                }}
              >
                Public
              </div>
            </StBlock>
            <StBlock>
              <div
                style={{
                  fontSize: '.9rem',
                  color: '#787E83',
                  marginBottom: '4px',
                }}
              >
                Title*
              </div>

              <StInput>
                <input
                  style={{
                    border: 'none',
                    backgroundColor: 'inherit',
                    width: '100%',
                    height: '100%',
                    outline: 'none',
                    fontSize: '1.1rem',
                  }}
                  placeholder="e.g. Young man surfing in the ocean"
                ></input>
              </StInput>
            </StBlock>
            <StBlock>
              <div
                style={{
                  fontSize: '.9rem',
                  color: '#787E83',
                  marginBottom: '4px',
                }}
              >
                Description
              </div>

              <StInput placeholder="title">
                <textarea
                  style={{
                    resize: 'none',
                    border: 'none',
                    backgroundColor: 'inherit',
                    width: '100%',
                    height: '50px',
                    outline: 'none',
                    fontFamily: 'inherit',
                  }}
                  placeholder="e.g. Low angle vier of young African man surfing in the ocean with a clear blue sky"
                ></textarea>
              </StInput>
            </StBlock>
            <StBlock>
              <div
                style={{
                  fontSize: '.9rem',
                  color: '#787E83',
                  marginBottom: '4px',
                }}
              >
                Location
              </div>

              <StInput>
                <input
                  style={{
                    border: 'none',
                    backgroundColor: 'inherit',
                    width: '100%',
                    height: '100%',
                    outline: 'none',
                    fontSize: '1.1rem',
                  }}
                  placeholder="Enter Location"
                ></input>
              </StInput>
            </StBlock>
            <StBlock>
              <div
                style={{
                  fontSize: '.9rem',
                  color: '#787E83',
                  marginBottom: '4px',
                }}
              >
                Category*
              </div>
              <div
                style={{
                  border: '1px solid #D7D8DB',
                  borderRadius: '4px',

                  fontSize: '.9rem',
                  color: '#787E83',
                  padding: '12px 16px',
                }}
              >
                Public
              </div>
            </StBlock>
          </div>
        </div>
      )}
    </>
  );
}
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid #dadbdd;
  margin-right: ${(props) => props.direction === 'left' && '8px'};
  margin-left: ${(props) => props.direction === 'right' && '8px'};
  height: ${(props) => (props.direction === 'left' ? '32px' : '40px')};
  padding: 0px 24px 0 20px;
  font-weight: ${(props) => props.direction === 'left' && '700'};
  color: ${(props) => (props.direction === 'left' ? '#0870D1' : '#535659')};
  white-space: nowrap;
`;

const ButtonBox = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const BlueBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 56px;
  background: #edf6fe;
  gap: 10px;
  word-break: break-all;
`;
const StInput = styled.div`
  border: 1px solid #d7d8db;
  border-radius: 4px;
  padding: 12px 16px;
  width: 323px;
  background: inherit;
`;

const StBlock = styled.div`
  margin-bottom: 24px;
`;
const CheckBox = styled.input`
  width: 24px;
  height: 24px;
  margin: 3px 6px 0 0;
`;
const StBox = styled.div`
  flex-grow: 1;
  overflow: hidden;
  @media (max-width: 800px) {
    display: none;
  }
`;

const TitleBox = styled.div`
  margin-top: 72px;
  height: 56px;
  padding-left: 64px;
`;

const BlueButton = styled.button`
  cursor: pointer;
  width: 153px;
  height: 48px;
  margin-top: 24px;
  background-color: #0870d1;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 28px;
`;
