# SHA1 충돌 테스트
이 프로그램은 Node.js 로 작성되었습니다.
* NodeJS 웹사이트 : [Node.js](https://nodejs.org/)

CWI와 구글이 2017년 2월 24일 SHA1의 충돌 가능성을 입증하는 발표가 있었습니다.

이 프로젝트는 내가 직접 테스트해보는 코드입니다.

웹사이트 참고 : [shattered.io][]

# 서로 다른 두 파일

[shattered.io][]에서 제공하는 두 PDF 파일입니다.

이 서로 다른 두 파일을 SHA1으로 해싱할 경우 같은 값을 내놓습니다.

* PDF1 : [http://shattered.io/static/shattered-1.pdf](http://shattered.io/static/shattered-1.pdf)
* PDF2 : [http://shattered.io/static/shattered-2.pdf](http://shattered.io/static/shattered-2.pdf)

# 실험

* 코드를 가져옵니다.

```console
$ git clone https://github.com/wooyaggo/sha1_collision.git
$ cd sha1_collision
```

* Node.js를 이용해 실행합니다.

```console
$ node app
```

* 결과
```console
Hash 1 : 38762cf7f55934b34d179ae6a4c80cadccbb7f0a
Hash 2 : 38762cf7f55934b34d179ae6a4c80cadccbb7f0a
Assert : true
```

우리 모두 SHA-3나 SHA-256으로 업그레이드 해야하겠습니다.

[shattered.io]: https://shattered.io