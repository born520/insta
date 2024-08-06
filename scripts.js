// 스프레드시트 ID와 시트명
const SPREADSHEET_ID = '1qj4ClqV83wg2N4AAlJhvciDXPCoUJD7HBGWubdHUqjA';
const SHEET_NAME = '시트1';

// Tabletop을 사용하여 Google 스프레드시트 데이터 가져오기
window.addEventListener('DOMContentLoaded', () => {
    Tabletop.init({
        key: SPREADSHEET_ID,
        callback: showInfo,
        simpleSheet: true
    });
});

function showInfo(data, tabletop) {
    const container = document.getElementById('instagram-embeds');

    data.forEach(row => {
        const embedCode = row['임베드 코드']; // '임베드 코드'가 B열에 해당한다고 가정
        if (embedCode) {
            const div = document.createElement('div');
            div.classList.add('embed-container');
            div.innerHTML = embedCode;
            container.appendChild(div);
        }
    });
}
