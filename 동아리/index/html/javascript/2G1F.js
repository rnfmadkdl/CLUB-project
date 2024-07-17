const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const errorMessage = document.getElementById('error-message');

searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '1학년 1층' || searchTerm === '1학년동 1층' || searchTerm === '1 학년 1층' || searchTerm === '미술실'
        || searchTerm === '정보실' || searchTerm === '컴퓨터실' || searchTerm === '1학년 1층 베이스' || searchTerm === '1학년 1층 홈베이스' || searchTerm === '1학년 홈베이스'
        || searchTerm === '과학과 교무실' || searchTerm === '과학 교무실' || searchTerm === '과학교무실' || searchTerm === '과학과교무실' || searchTerm === 'wee class' || searchTerm === 'WEE CLASS'
        || searchTerm === 'WEE 클래스' || searchTerm === 'wee 클래스' || searchTerm === '위 클래스' || searchTerm === '위클래스' || searchTerm === '음악실' || searchTerm === '화학실'
        || searchTerm === '1층 테라스' || searchTerm === '1층테라스' || searchTerm === '지구과학실' || searchTerm === '물리실' || searchTerm === '1학년 1층 화장실' || searchTerm === '1학년 1층화장실'
        || searchTerm === '1학년 1층 남자 화장실' || searchTerm === '1학년 1층 여자 화장실' || searchTerm === '1학년 1층남자화장실' || searchTerm === '1학년 1층여자화장실' || searchTerm === '1학년 1층 남자화장실'
        || searchTerm === '1학년 1층 여자화장실' || searchTerm === '1학년 1층 화장실' || searchTerm === '1학년 교직원 화장실' || searchTerm === '1학년 교직원화장실' || searchTerm === '1학년교직원화장실') {
        window.open('1G1F.html', '_blank');
        errorMessage.textContent = '';
    } else if (searchTerm === '1학년 2층' || searchTerm === '1학년동 2층' || searchTerm === '1학년동2층' || searchTerm === '1학년2층' || searchTerm === '교목실' || searchTerm === '소회의실'
        || searchTerm === '1학년 2층 베이스' || searchTerm === '1학년 2층 홈베이스' || searchTerm === '1학년2층베이스' || searchTerm === '1학년2층홈베이스' || searchTerm === '1학년 1층 탈의실'
        || searchTerm === '1학년 2층탈의실' || searchTerm === '1학년2층탈의실' || searchTerm === '1학년 2층 여자화장실' || searchTerm === '1학년2층여자화장실' || searchTerm === '1-1'
        || searchTerm === '1-2' || searchTerm === '1-3' || searchTerm === '1-4' || searchTerm === '1학년 1반' || searchTerm === '1학년 2반' || searchTerm === '1학년 3반'
        || searchTerm === '1학년 4반' || searchTerm === '1학년1반' || searchTerm === '1학년2반' || searchTerm === '1학년3반' || searchTerm === '1학년4반' || searchTerm === '온엔학습터'
        || searchTerm === '온N학습터' || searchTerm === '온n학습터' || searchTerm === '온교과터' || searchTerm === '온 교과터'
        || searchTerm === '1학년 교무실' || searchTerm === '1학년교무실') {
        window.open('1G2F.html', '_blank');
        errorMessage.textContent = '';
    } else if (searchTerm === '1학년 3층' || searchTerm === '1학년동 3층' || searchTerm === '1학년동3층' || searchTerm === '1학년3층' || searchTerm === '3층 테라스' || searchTerm === '3층테라스'
        || searchTerm === '1학년 3층 남자화장실' || searchTerm === '1학년3층 남자화장실' || searchTerm === '1학년3층남자화장실' || searchTerm === '1학년 3층 탈의실' || searchTerm === '1학년3층탈의실'
        || searchTerm === '1학년 3층탈의실' || searchTerm === '1학년 3층 베이스' || searchTerm === '1학년 3층 홈베이스' || searchTerm === '1학년3층홈베이스' || searchTerm === '1학년3층베이스'
        || searchTerm === '1-5' || searchTerm === '1-6' || searchTerm === '1-7' || searchTerm === '1-8' || searchTerm === '1-9' || searchTerm === '1-10' || searchTerm === '1학년 5반'
        || searchTerm === '1학년 6반' || searchTerm === '1학년 7반' || searchTerm === '1학년 8반' || searchTerm === '1학년 9반' || searchTerm === '1학년 10반'
        || searchTerm === '1학년5반' || searchTerm === '1학년6반' || searchTerm === '1학년7반' || searchTerm === '1학년8반' || searchTerm === '1학년9반' || searchTerm === '1학년10반') {
        window.open('1G3F.html', '_blank');
        errorMessage.textContent = '';
    } else if (searchTerm === '2학년 1층' || searchTerm === '2학년동 1층' || searchTerm === '2학년동1층' || searchTerm === '2학년1층'
        || searchTerm === '본교무실' || searchTerm === '2학년 홈베이스' || searchTerm === '2학년홈베이스' || searchTerm === '2학년 베이스'
        || searchTerm === '2학년베이스' || searchTerm === '본교무실' || searchTerm === '본 교무실' || searchTerm === '방송실'
        || searchTerm === '2학년 1층 여자화장실' || searchTerm === '2학년1층여자화장실' || searchTerm === '휴계실') {
        window.open('2G1F.html', '_blank');
        errorMessage.textContent = '';
    } else if (searchTerm === '2학년 2층' || searchTerm === '2학년동 2층' || searchTerm === '2학년동2층' || searchTerm === '2학년2층'
        || searchTerm === '2-5' || searchTerm === '2-6' || searchTerm === '2-7' || searchTerm === '2학년 5반'
        || searchTerm === '2학년 6반' || searchTerm === '2학년 7반' || searchTerm === '2학년5반' || searchTerm === '2학년6반'
        || searchTerm === '2학년7반' || searchTerm === '2학년 2층 탈의실' || searchTerm === '2학년2층탈의실' || searchTerm === '2학년 2층탈의실'
        || searchTerm === '2학년2층 탈의실') {
        window.open('2G2F.html','_blank');
        errorMessage.textContent = '';
    } else if (searchTerm === '2학년 3층' || searchTerm === '2학년동 3층' || searchTerm === '2학년3층' || searchTerm === '2학년동3층'
        || searchTerm === '2-8' || searchTerm === '2-9' || searchTerm === '2-10' || searchTerm === '2학년 8반'
        || searchTerm === '2학년 9반' || searchTerm === '2학년 10반' || searchTerm === '2학년8반' || searchTerm === '2학년9반'
        || searchTerm === '2학년10반' || searchTerm === '2학년 3층 탈의실' || searchTerm === '2학년3층탈의실' || searchTerm === '2학년3층 탈의실'
        || searchTerm === '2학년 3층탈의실' || searchTerm === '2학년3층여자화장실' || searchTerm === '2학년 3층 여자화장실' || searchTerm === '2학년3층 여자화장실'
        || searchTerm === '2학년 3층여자화장실') {
        window.open('2G3F.html','_blank');
        errorMessage.textContent = '';
    } else if (searchTerm === '3학년 1층' || searchTerm === '3학년동 1층' || searchTerm === '3학년1층' || searchTerm === '3학년동1층'
        || searchTerm === '3-1' || searchTerm === '3-2' || searchTerm === '3-3' || searchTerm === '3-4' || searchTerm === '3-5'
        || searchTerm === '3-6' || searchTerm === '3학년 1반' || searchTerm === '3학년 2반' || searchTerm === '3학년 3반' 
        || searchTerm === '3학년 4반' || searchTerm === '3학년 5반' || searchTerm === '3학년 6반'
        || searchTerm === '3학년1반' || searchTerm === '3학년2반' || searchTerm === '3학년3반' || searchTerm === '3학년4반'
        || searchTerm === '3학년5반' || searchTerm === '3학년6반' || searchTerm === '3학년 교직원화장실' || searchTerm === '3학년교직원화장실'
        || searchTerm === '3학년교무실' || searchTerm === '3학년 교무실') {
        window.open('3G1F.html','_blank');
        errorMessage.textContent = '';
    } else if (searchTerm === '3학년 2층' || searchTerm === '3학년동 2층' || searchTerm === '3학년2층' || searchTerm === '3학년동2층' || searchTerm === '자율학습실' || searchTerm === '자율 학습실' 
        || searchTerm === '자습실' || searchTerm === '창의부 교무실' || searchTerm === '창의부교무실' || searchTerm === '3학년 3층 화장실' || searchTerm === '3학년3층화장실' || searchTerm === '3학년3층 화장실'
        || searchTerm === '3학년 3층화장실' || searchTerm === '학생 자치회실' || searchTerm === '학생자치회실' || searchTerm === '3-7' || searchTerm === '3-8' || searchTerm === '3-9' || searchTerm === '3-10'
        || searchTerm === '3학년 7반' || searchTerm === '3학년 8반' || searchTerm === '3학년 9반' || searchTerm === '3학년 10반' || searchTerm === '3학년7반' || searchTerm === '3학년8반' || searchTerm === '3학년9반'
        || searchTerm === '3학년10반') {
        window.open('3G2F.html','_blank');
        errorMessage.textContent = '';
    } else if (searchTerm === '3학년 3층' || searchTerm === '3학년동 3층' || searchTerm === '3학년3층' || searchTerm === '3학년동3층' || searchTerm === '중국어실' || searchTerm === '일본어실' 
        || searchTerm === '2-1' || searchTerm === '2-2' || searchTerm === '2-3' || searchTerm === '2-4' || searchTerm === '2학년 1반' || searchTerm === '2학년 2반' || searchTerm === '2학년 3반'
        || searchTerm === '2학년 4반' || searchTerm === '2학년1반' || searchTerm === '2학년2반' || searchTerm === '2학년3반' || searchTerm === '2학년4반' || searchTerm === '3학년 3층 화장실' || searchTerm === '3학년3층화장실'
        || searchTerm === '3학년3층 화장실' || searchTerm === '3학년 3층화장실') {
        window.open('3G3F.html','_blank');
        errorMessage.textContent = '';
    } else if (searchTerm === '여자 기숙사' || searchTerm === '여자기숙사' || searchTerm === '여기숙사' || searchTerm === '미지의 영역' || searchTerm === '3학년 4층' || searchTerm === '3학년동 4층'
        || searchTerm === '3학년4층' || searchTerm === '3학년동4층') {
        window.open('3G4F.html','_blank');
        errorMessage.textContent = '';
    } else if (searchTerm === '남자 기숙사' || searchTerm === '남자기숙사' || searchTerm === '남기숙사' || searchTerm === '우리식당 정상영업합니다') {
        window.open('남기숙사.html','_blank');
        errorMessage.textContent = '';
    } else if (searchTerm === '이스터에그' || searchTerm === 'easter egg' || searchTerm === '이걸찾네' || searchTerm === '코딩동아리') {
        window.open('easter egg.html','_blank');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = '존재하지 않는 장소 입니다'}}