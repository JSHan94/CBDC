# CBDC demo project with COSMOS blockchain

코스모스 블록체인을 이용한 CBDC 데모 프로젝트

# ToDo

- Cross-border payment
- Privacy 기능

# 파일 설명

CBDC_server :  코스모스 블록체인에 쿼리를 보낼 서버

CBDC_admin : 은행 관리 시나리오 데모

CBDC_user : 유저 서비스 데모

dpnmd : CBDC 코스모스 블록체인

# 실행 방법

## shell 1 서버 실행

Admin port : 3001 

User port : 3002

Server port : 3030

```
./run_CBDC.sh
```

## shell 2 Cosmos 블록체인 실행

```
starport serve
``` 

만약 블록이 생성 되지 않는 다면 다른 shell에서 아래와 같은 명령어 실행 시 블록이 생성됨 (에러 메시지가 Trigger 역할을 하는 듯함..)

dpnm은 cosmos-SDK chain 생성 시 초기 세팅한 이름임. 자유롭게  

```
dpnmd start
``` 

# 실행 결과

## 실행 이미지

![demo1](./images/demo1.PNG)
![demo2](./images/demo2.PNG)

## 데모 영상 

[유튜브](https://www.youtube.com/watch?v=DqvWH7rcHTU)
