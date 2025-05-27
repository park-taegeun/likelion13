/**
 * try...catch
 * 에러는
 * 1. 발생시킬때 -> 던진다.(throw)
 * 2. 명시적으로 인지할 때  -> 잡는다고 한다.(catch)
 */
function runner() {
    try { // try에서 에러가 나면
        console.log('Hello');
    
        throw new Error('큰 문제가 생겼습니다.'); // 이 코드가 에러를 던진 거임 = 에러를 발생시킨 것것
    
        console.log('Code Factory');
    } catch(e) { // catch로 넘어간다.
        console.log('---catch---');
        console.log(e);
    } finally { // finally는 에러의 발생 여부와 관계없이 무조건 실행
        console.log('---finally---');
    }
}
runner();