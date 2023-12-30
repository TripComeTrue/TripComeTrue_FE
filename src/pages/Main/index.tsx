import SIGNIN_API from '@/apis/SignIn';

function App() {
  const onClickFetch = async () => {
    const res = await SIGNIN_API.userSignIn({
      email: 'hongkyu9941@naver.com',
      password: '123123123',
    });

    console.log(res);
  };

  return (
    <button type="button" onClick={onClickFetch}>
      호출
    </button>
  );
}
export default App;
