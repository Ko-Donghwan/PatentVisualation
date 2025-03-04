export function useHeight() {
  const [docsHeight, setDocsHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    let mounted = true; // 컴포넌트가 마운트되었을 때
    let timer: any = null; // useEffect 안에서 setTimeout이 한번만 동작하도록 제한
    window.addEventListener('resize', () => {
      if (mounted) {
        // timer라는 변수에 비동기 함수를 재할당하는 방식으로 이벤트 호출을 제한한다
        clearTimeout(timer);
        timer = setTimeout(() => {
          console.log('리사이즈 이벤트 시작');
          setDocsHeight(window.innerHeight);
        }, 300);
      }
    });
    // useEffect에서 return function은
    // component가 unmount될 때 실행되는 callback function이다!
    return () => {
      // console.log('리사이즈 이벤트 종료');
      mounted = false; // 컴포넌트가 언마운트되었을 때
    };
  });
  return {
    docsHeight,
  };
}