Outlet

- 하위 경로 요소를 랜더링하기 위해 상위 경로 요소에서 Outlet을 사용해야 한다.
- 이를 통해 하위 경로가 렌더링 될 때 중첩된 UI가 표시될 수 있다.
- https://reactrouter.com/en/main/components/outlet

Auth.authStateReady()

- 초기 인증 상태가 해결되면 즉시 resolve되는 promise를 반환한다.
- promise가 확인되면 현재 사용자는 유효한 사용자이거나, 사용자가 로그아웃한 경우 null일 수 있다.

Auth.cyrrentUser

- 현재 로그인한 사용자

Auth.signOut()

- 현재 사용자를 로그아웃한다.
- 사용자의 ID 토큰을 자동으로 취소하지 않는다.
  Auth.onAuthStateChanged()
- 사용자의 로그인 상태 변경에 대한 관찰자를 추가한다.

Auth 관련 문서

- https://firebase.google.com/docs/reference/js/auth.auth?hl=ko
