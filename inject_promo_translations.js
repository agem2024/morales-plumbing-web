const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

const additions = {
    'en': ',\n        "promo_drain_title": "Main Line Clearing",\n        "promo_drain_desc": "Includes courtesy camera inspection. Valid with proper cleanout access.",\n        "promo_btn_book": "Book Offer",\n        "promo_senior_title": "Senior & Military Discount",\n        "promo_senior_desc": "Discount applies to any repair over $350. Thank you for your service.",\n        "promo_btn_apply": "Apply Discount",\n        "promo_second_title": "Second Opinion",\n        "promo_second_desc": "Got a high estimate from another company? We review it for free, no obligation.",\n        "promo_btn_schedule": "Schedule Visit",\n        "finance_title": "Financing Available",\n        "finance_desc": "Flexible payment options for major projects (Repipe, Water Heaters, Sewer Lines). Fast online approval!",\n        "finance_btn": "Apply Now"',
    'es': ',\n        "promo_drain_title": "Limpieza de Línea Principal",\n        "promo_drain_desc": "Incluye inspección con cámara de cortesía. Válido con acceso de limpieza adecuado.",\n        "promo_btn_book": "Reservar Oferta",\n        "promo_senior_title": "Descuento Senior & Militar",\n        "promo_senior_desc": "Descuento aplicable a cualquier reparación mayor a $350. Gracias por su servicio.",\n        "promo_btn_apply": "Aplicar Descuento",\n        "promo_second_title": "Segunda Opinión",\n        "promo_second_desc": "¿Recibió un estimado alto de otra compañía? Lo revisamos gratis y sin compromiso.",\n        "promo_btn_schedule": "Programar Visita",\n        "finance_title": "Financiamiento Disponible",\n        "finance_desc": "Opciones de pago flexibles para proyectos mayores (Repipe, Calentadores de Agua, Líneas de Drenaje). ¡Aprobación rápida online!",\n        "finance_btn": "Solicitar Ahora"',
    'zh': ',\n        "promo_drain_title": "主管道清理",\n        "promo_drain_desc": "包括免费的摄像头检查。需要在有适当清洁口的情况下有效。",\n        "promo_btn_book": "预订优惠",\n        "promo_senior_title": "老年人及退伍军人折扣",\n        "promo_senior_desc": "适用于超过350美元的任何维修。感谢您的服务。",\n        "promo_btn_apply": "申请折扣",\n        "promo_second_title": "第二意见",\n        "promo_second_desc": "收到了其他公司的高额报价？我们免费审查，无任何义务。",\n        "promo_btn_schedule": "安排访问",\n        "finance_title": "提供融资",\n        "finance_desc": "为大型项目（管道重排、热水器、下水管道）提供灵活的付款选项。在线快速批准！",\n        "finance_btn": "立即申请"',
    'tl': ',\n        "promo_drain_title": "Paglilinis ng Pangunahing Linya",\n        "promo_drain_desc": "May kasamang libreng camera inspection. Valid na may tamang cleanout access.",\n        "promo_btn_book": "I-book ang Alok",\n        "promo_senior_title": "Diskwento para sa Senior at Militar",\n        "promo_senior_desc": "Valid ang diskwento para sa anumang pag-aayos na higit sa $350. Salamat sa inyong serbisyo.",\n        "promo_btn_apply": "I-apply ang Diskwento",\n        "promo_second_title": "Pangalawang Opinyon",\n        "promo_second_desc": "Nakakuha ng mataas na estimate mula sa ibang kumpanya? Susuriin namin ng libre, walang obligasyon.",\n        "promo_btn_schedule": "I-iskedyul ang Pagbisita",\n        "finance_title": "Available ang Pagpopondo",\n        "finance_desc": "Flexible na opsyon sa pagbabayad para sa malalaking proyekto (Repipe, Water Heaters, Sewer Lines). Mabilis na online na pag-apruba!",\n        "finance_btn": "Mag-apply Na"',
    'vi': ',\n        "promo_drain_title": "Làm Sạch Đường Ống Chính",\n        "promo_drain_desc": "Bao gồm kiểm tra máy ảnh miễn phí. Hợp lệ với quyền truy cập làm sạch thích hợp.",\n        "promo_btn_book": "Đặt Ưu Đãi",\n        "promo_senior_title": "Giảm Giá Cho Người Cao Tuổi & Quân Nhân",\n        "promo_senior_desc": "Giảm giá áp dụng cho bất kỳ sửa chữa nào trên $350. Cảm ơn bạn vì sự phục vụ của bạn.",\n        "promo_btn_apply": "Áp Dụng Giảm Giá",\n        "promo_second_title": "Ý Kiến Thứ Hai",\n        "promo_second_desc": "Nhận được một ước tính cao từ công ty khác? Chúng tôi sẽ xem xét miễn phí, không có nghĩa vụ.",\n        "promo_btn_schedule": "Lên Lịch Chuyến Thăm",\n        "finance_title": "Hỗ Trợ Tài Chính Có Sẵn",\n        "finance_desc": "Tùy chọn thanh toán linh hoạt cho các dự án lớn (Sửa Ống, Máy Nước Nóng, Đường Ống Nước Thải). Phê duyệt trực tuyến nhanh chóng!",\n        "finance_btn": "Nộp Đơn Ngay"'
};

const langs = ['en', 'es', 'zh', 'tl', 'vi'];

for (let i = 0; i < langs.length; i++) {
    const lang = langs[i];
    let startIndex = code.indexOf('"' + lang + '": {');
    if (startIndex === -1) continue;
    let endIndex = i < langs.length - 1 ? code.indexOf('"' + langs[i+1] + '": {', startIndex) : code.indexOf('};', startIndex);
    
    let block = code.substring(startIndex, endIndex);
    let lastBraceIdx = block.lastIndexOf('    }');
    if (lastBraceIdx !== -1) {
        block = block.substring(0, lastBraceIdx) + additions[lang] + '\n' + block.substring(lastBraceIdx);
        code = code.substring(0, startIndex) + block + code.substring(endIndex);
    }
}

fs.writeFileSync('app.js', code);
console.log('Promo translations injected successfully!');
