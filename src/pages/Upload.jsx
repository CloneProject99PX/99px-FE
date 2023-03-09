import React, { useEffect, useState } from 'react';
import { useRef, useCallback } from 'react';
import {
  AiOutlineArrowUp,
  AiOutlineInfoCircle,
  AiOutlinePlus,
  AiOutlineWindows,
  AiOutlineCrown,
  AiOutlineCheck,
} from 'react-icons/ai';
import { IoIosPeople, IoIosInformationCircleOutline } from 'react-icons/io';
import { CiTrash } from 'react-icons/ci';
import styled from 'styled-components';
import useToggle from '../hooks/useToggle';
import useDebounce from '../hooks/useDebounce';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function Upload() {
  const [data, setData] = useState({
    title: '',
    description: '',
    location: '',
    category: '',
    nsfw: false,
  });
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  useEffect(() => {
    setCookie(
      'token',
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJieXVuZ21vb2tpbTg5QGdtYWlsLmNvbSIsImV4cCI6MTY3ODM0Njg2NSwiaWF0IjoxNjc4MzQzMjY1fQ.rfeQ2ELCzsv3Xf3sBmIqYgrJWEPHQ0zf4KA51C0w8OQ'
    );
  }, []);
  // 디바운싱 로케이숀 한글입력방지

  const fetchValue = useDebounce(data.location, 500);
  const onChangeLocationInputValHandler = (e) => {
    const value = e.target.value.replaceAll(/[^A-Za-z]/gi, '');
    setData({ ...data, location: value });
  };
  const [isLocationModal, setIsLocationModal] = useState(false);
  const [isCategoryModal, setIsCategoryModal] = useState(false);

  // 카테고리 입력값에 필터해주기 한글입력 방지
  const onChangeCategoryInputValHandler = (e) => {
    const value = e.target.value.replaceAll(/[^A-Za-z]/gi, '');
    // setCategoryInputVal(value);
    setData({ ...data, category: value });
  };

  const [isUpload, setIsUpload] = useToggle();

  const [location] = useState([
    'SEOUL',
    'BUSAN',
    'INCHON',
    'DAEGU',
    'DAEJEON',
    'KWANGJU',
    'SUWON',
    'ULSAN',
    'GOYANG',
    'YONGIN',
    'CHANGWON',
    'SEONGNAM',
    'CHEONG_JU',
    'BUCHON',
    'HWASEONG',
    'NAMYANGJU',
    'JEONJU',
    'CHEONAN',
    'ANSAN',
    'ANYANG',
    'KIMHAE',
    'PYEONGTAEK',
    'POHANG',
    'JEJU',
    'SIHEUNG',
    'PAJU',
    'UIJEONGBU',
    'GIMPO',
    'GUMI',
    'GWANGJU',
    'YANGSAN',
    'WONJU',
    'JINJU',
    'SEJONG',
    'KWANGMYUNG',
    'ASAN',
    'IKSAN',
    'CHUNCHEON',
    'KYUNGSAN',
    'GUNPO',
    'GUNSAN',
    'HANAM',
    'YEOSU',
    'SUNCHEON',
    'KYUNGJU',
    'GEOJE',
    'MOKPO',
    'OSAN',
    'ICHEON',
    'GANGNEUNG',
    'YANGJU',
    'CHUNGJU',
    'ANSEONG',
    'GURI',
    'SEOSAN',
    'SEOGWIPO',
    'DANGJIN',
    'ANDONG',
    'POCHEON',
    'UIWANG',
    'GWANGYANG',
    'GIMCHEON',
    'JECHEON',
    'TONGYEONG',
    'NONSAN',
    'CHILGOK',
    'SACHEON',
    'YEOJU',
    'GONGJU',
    'YANGPYEONG',
    'JEONGEUP',
    'YEONGJU',
    'NAJU',
    'EUMSEONG',
    'MILYANG',
    'HONGSEONG',
    'BORYEONG',
    'WANJU',
    'SANGJU',
    'YEONGCHEON',
    'DONGDUCHEON',
    'DONGHAE',
    'GIMJE',
    'MUAN',
    'NAMWON',
    'JINCHEON',
    'YESAN',
    'SOKCHO',
    'MUNGYEONG',
    'HAMAN',
    'SAMCHEOK',
    'HONGCHEON',
    'HAENAM',
    'BUYEO',
    'CHANGNYEONG',
    'TAEAN',
    'GOHEUNG',
    'HWASUN',
    'GEOCHANG',
    'GAPYEONG',
    'YEONGAM',
    'GEUMSAN',
    'GOCHANG',
    'GWACHEON',
    'SEOCHEON',
    'GOSEONG',
    'BUAN',
    'UISEONG',
    'OKCHEON',
    'YEONGGWANG',
    'YEONGDONG',
    'ULJIN',
    'WANDO',
    'YECHON',
    'CHEOLWON',
    'TAEBAEK',
    'YEONCHON',
    'DAMYANG',
    'HAPCHEON',
    'HADONG',
    'HOENGSEONG',
    'NAMHAE',
    'KYERYONG',
    'JANGSEONG',
    'CHEONGDO',
    'SEONGJU',
    'PYEONGCHANG',
    'BOSEONG',
    'GOESAN',
    'HAMYANG',
    'JEONGPYEONG',
    'YEONGWOL',
    'JANGHEUNG',
    'YEONGDEOK',
    'JEONGSEON',
    'SHINAN',
    'SANCHEONG',
    'GANGJIN',
    'GORYUNG',
    'BOEUN',
    'CHEONGYANG',
    'BONGHWA',
    'HAMPYEONG',
    'INJE',
    'JINDO',
    'GOKSEONG',
    'GOSEUNG',
    'DANYANG',
    'SUNCHANG',
    'IMSIL',
    'UIRYUNG',
    'YANGYANG',
    'HWACHEON',
    'CHEONGSONG',
    'GURYE',
    'MUSU',
    'JINAN',
    'YANGGU',
    'GUNWI',
    'JANGSU',
    'YEONGYANG',
    'ULLEUNG',
  ]);
  const [category] = useState([
    'Abstract',
    'Aerial',
    'Animals',
    'Black_and_White',
    'Celebrities',
    'City_and_Architecture',
    'Commercial',
    'Concert',
    'Family',
    'Fashion',
    'Food',
    'FindArt',
    'Film',
    'Journalism',
    'Landscapes',
    'Macro',
    'Nature',
    'Night',
    'People',
    'Performing_Arts',
    'Sport',
    'Still_Life',
    'Street',
    'Transportation',
    'Travel',
    'Underwater',
    'Urban_Exploration',
    'Wedding',
    'Other',
  ]);

  // 입력값에 따라 카테고리 배열 새로 리턴해주는곳
  const foundCategory = category.filter((item) => {
    const inputVal = data.category.toUpperCase();

    return item.toUpperCase().includes(inputVal);
  });

  // 입력값에 따라 도시 배열 새로 리턴해주는곳

  const foundLocation = location.filter((item) => {
    const inputVal = fetchValue.toUpperCase();
    if (!inputVal) {
      return;
    }

    return item.includes(inputVal);
  });

  const changeTitleHandler = (e) => {
    setData({ ...data, title: e.target.value });
  };
  const changeDescHandler = (e) => {
    setData({ ...data, description: e.target.value });
  };
  const nsfwCheckButtonHandler = (e) => {
    setData({ ...data, nsfw: e.target.checked });
  };

  const fileInputRef = useRef();
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState('');
  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setIsUpload();
      };
      reader.readAsDataURL(imageFile);
    } else {
      setPreview(null);
    }
  }, [imageFile]);

  return (
    <div
      onClick={() => {
        if (isCategoryModal) {
          setIsCategoryModal(false);
        }
        if (isLocationModal && data.category) {
          setIsLocationModal(false);
        }
      }}
    >
      <button
        onClick={() => {
          axios
            .post('http://43.201.5.38/api/login', {
              email: 'byungmookim89@gmail.com',
              password: 'rlaqudan1',
            })
            .then((response) => {
              console.log(response);
            });
        }}
      >
        하이
      </button>
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

      {/* 임시 분기처리*/}
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
          <div style={{ marginTop: '24px' }}>
            <form encType="multipart/form-data">
              <input
                style={{ display: 'none' }}
                type="file"
                accept="image/jpg"
                ref={fileInputRef}
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (file && file.type.substring(0, 5) === 'image') {
                    setImageFile(file);

                    // setData({ ...data, image: file });
                  } else {
                    setImageFile(null);
                  }
                }}
              ></input>
              <BlueButton
                onClick={(e) => {
                  e.preventDefault();
                  fileInputRef.current.click();

                  // setData({ ...data, image: imageFile });
                }}
              >
                Select photos
              </BlueButton>
            </form>
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
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (
              !data.title ||
              !data.category ||
              !data.description ||
              !data.location
            ) {
              alert('정보를 모두 입력해주세요');
            }
            if (
              category.includes(data.category) &&
              location.includes(data.location)
            ) {
              const formData = new FormData();
              const { title, description, location, category, nsfw } = data;
              const body = JSON.stringify({
                title,
                description,
                location,
                category,
                nsfw,
              });
              formData.append(
                'photoRequestDto',
                new Blob([body], { type: 'application/json' })
              );
              // const blob = new Blob([JSON.stringify(data)], {
              //   type: 'application/json',
              // });

              formData.append('image', imageFile);

              // formData.append('description', data.description);
              // formData.append('title', data.title);
              // formData.append('location', data.location);
              // formData.append('category', data.category);
              // formData.append('nsfw', data.nsfw);
              for (const f of formData.values()) {
                console.log(f);
              }

              axios
                .post('http://43.201.5.38/api/manage/upload', formData, {
                  headers: {
                    Authorization: `Bearer ${cookies.token}`,
                    'Content-Type': 'multipart/form-data',
                  },
                })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
              // alert('전송준비 완료');

              window.location.reload();
            } else {
              alert('위치정보랑 카테고리 똑바로 입력하세요');
            }
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              height: '79vh',
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
                  <StButton direction="left">
                    <AiOutlinePlus size="20" color="black"></AiOutlinePlus>Add
                  </StButton>
                  <StButton direction="left">
                    <CiTrash color="black" size="16"></CiTrash>Remove(1)
                  </StButton>
                </div>
                <div style={{ display: 'flex' }}>
                  <StButton direction="right">
                    <AiOutlineWindows size="20"></AiOutlineWindows>Select all
                  </StButton>
                  <StButton direction="right">
                    <AiOutlineWindows size="20"></AiOutlineWindows>Multi select
                  </StButton>
                </div>
              </ButtonBox>

              <img
                style={{
                  objectFit: 'cover',
                  outline: '2px solid #0870D1',
                  padding: '2px',
                  margin: '4px',
                }}
                height="184px"
                src={preview}
              ></img>
            </StBox>
            <div>
              <div
                style={{
                  width: '360px',
                  padding: '0 24px',
                  background: 'white',
                  border: '2px solid #EEEFF2',
                  height: '100%',
                  overflowY: 'auto',
                }}
              >
                <div
                  style={{
                    width: '360px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '56px',
                    fontWeight: '700',
                    position: 'sticky',
                    top: '0',
                    background: 'white',
                    zIndex: '1',
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
                  <div>
                    <CheckBox
                      onClick={nsfwCheckButtonHandler}
                      type="checkbox"
                    ></CheckBox>
                  </div>

                  <div style={{ marginLeft: '20px' }}>
                    NSFW content
                    <IoIosInformationCircleOutline></IoIosInformationCircleOutline>
                    <br></br>{' '}
                    <span
                      style={{
                        fontSize: '.9rem',
                        color: '#787E83',
                        letterSpacing: '-0.2px',
                      }}
                    >
                      This photo contains nudity, sexually explicit, or
                      suggestive content.{' '}
                      {/* <span style={{ color: '#0870d1' }}>500px Licensing.</span> */}
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
                    Title*
                  </div>

                  <StInput>
                    <input
                      value={data.title || ''}
                      onChange={changeTitleHandler}
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
                    Description*
                  </div>

                  <StInput>
                    <textarea
                      value={data.description || ''}
                      onChange={changeDescHandler}
                      style={{
                        resize: 'none',
                        border: 'none',
                        backgroundColor: 'inherit',
                        width: '100%',
                        height: '50px',
                        outline: 'none',
                        fontFamily: 'inherit',
                        fontSize: '1rem',
                      }}
                      placeholder="e.g. Low angle vier of young African man surfing in the ocean with a clear blue sky"
                    ></textarea>
                  </StInput>
                </StBlock>
                <StBlock onClick={() => setIsLocationModal(true)}>
                  <div
                    style={{
                      fontSize: '.9rem',
                      color: '#787E83',
                      marginBottom: '4px',
                    }}
                  >
                    Location*
                  </div>

                  <StInput>
                    <input
                      value={data.location}
                      onChange={onChangeLocationInputValHandler}
                      style={{
                        border: 'none',
                        backgroundColor: 'inherit',
                        width: '100%',
                        height: '100%',
                        outline: 'none',
                        fontSize: '1.1rem',
                      }}
                      placeholder="Enter Location only alphabetical letters"
                    ></input>
                  </StInput>
                  {isLocationModal ? (
                    <div
                      style={{
                        width: '98%',
                        // height: '200px',
                        position: 'absolute',
                        zIndex: '1',
                        background: 'white',
                        marginTop: '4px',
                        // border: '1px solid lightgray',
                      }}
                    >
                      {foundLocation.slice(0, 6).map((item, i) => {
                        return (
                          <div
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation();
                              setData({ ...data, location: item });
                              setIsLocationModal(false);
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'flex-start',
                              padding: '4px 16px',
                              border: '1px solid lightgray',

                              cursor: 'pointer',
                              fontSize: '.8rem',
                              color: 'gray',
                            }}
                          >
                            {item}
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </StBlock>

                <StBlock onClick={() => setIsCategoryModal(!isCategoryModal)}>
                  <div
                    style={{
                      fontSize: '.9rem',
                      color: '#787E83',
                      marginBottom: '4px',
                    }}
                  >
                    Category*
                  </div>
                  <StInput>
                    <input
                      onChange={onChangeCategoryInputValHandler}
                      style={{
                        border: 'none',
                        backgroundColor: 'inherit',
                        width: '100%',
                        height: '100%',
                        outline: 'none',
                        fontSize: '1.1rem',
                      }}
                      placeholder="Select Category"
                      value={data.category}
                    ></input>
                  </StInput>
                  {isCategoryModal && (
                    <div
                      style={{
                        marginTop: '10px',
                        overflow: 'auto',
                        maxHeight: '300px',
                        borderRadius: '5px',
                        boxShadow: '10px grey',
                        border: '1px solid lightgray',
                        width: '98%',
                        position: 'absolute',
                        zIndex: '1',
                        background: 'white',
                      }}
                    >
                      {foundCategory.map((item, i) => {
                        return (
                          <div
                            key={i}
                            onClick={() => {
                              if (data.category === item) {
                                setData({ ...data, category: '' });
                              } else {
                                setData({ ...data, category: item });
                              }
                            }}
                            style={{
                              height: '46px',

                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              padding: '0px 24px',
                            }}
                          >
                            {item}
                            {item === data.category && (
                              <AiOutlineCheck
                                color="#0870D1"
                                size="20"
                              ></AiOutlineCheck>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </StBlock>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: '70px',
                    fontWeight: '700',
                    position: 'sticky',
                    bottom: '0',
                    backgroundColor: 'white',
                    // zIndex: '1',
                  }}
                >
                  <div>
                    <div
                      onClick={() => {
                        window.location.reload();
                      }}
                      style={{
                        marginRight: '24px',
                        color: '#0870d1',
                        fontWeight: '700',
                        cursor: 'pointer',
                      }}
                    >
                      Cancel
                    </div>
                  </div>
                  <div>
                    <BlueButton>Upload</BlueButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
const StButton = styled.button`
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
  position: relative;
  border-radius: 4px;
  padding: 12px 16px;
  width: 323px;
  background: inherit;
`;

const StBlock = styled.div`
  margin-bottom: 24px;
  position: relative;
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
  /* margin-top: 24px; */
  background-color: #0870d1;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 28px;
`;
