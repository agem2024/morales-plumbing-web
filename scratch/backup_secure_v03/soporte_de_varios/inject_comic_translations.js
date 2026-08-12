const fs = require('fs');

const comicData = {
    1: ["Initial diagnostic mapping.", "System isolation.", "Precision leak patching.", "Flow test and restoration."],
    2: ["Audit of water usage.", "Removal of old fixtures.", "Installation of eco-valves.", "System efficiency verification."],
    3: ["3D BIM modeling.", "Pressure gradient simulation.", "Code compliance check.", "Final blueprint delivery."],
    4: ["Removal of old pipes.", "Type L copper routing.", "ProPress joint securing.", "Hydrostatic pressure test."],
    5: ["Percolation testing.", "Excavation and grading.", "Bio-reactor installation.", "Effluent flow validation."],
    6: ["Foundation rough-in.", "Top-out plumbing.", "Fixture setting.", "City inspection pass."],
    7: ["Old unit haul-away.", "Heat pump placement.", "Condensate line routing.", "Electrical and WiFi setup."],
    8: ["Pressure gauge reading.", "Tank sizing calculation.", "Mounting and connection.", "System pressurization."],
    9: ["Camera inspection.", "Acoustic profiling.", "Data analysis.", "Digital report generation."],
    10: ["Catchment assessment.", "Cistern placement.", "Filtration setup.", "Irrigation integration."],
    11: ["Gas line calculation.", "Wall mount securing.", "Venting installation.", "Endless hot water test."],
    12: ["Main line location.", "Pipe section removal.", "Smart valve integration.", "App connectivity test."],
    13: ["Drywall mapping.", "PEX/Copper pulling.", "Manifold configuration.", "Patching and painting."],
    14: ["Drain diversion.", "Surge tank placement.", "Filter cleaning.", "Garden irrigation test."],
    15: ["Structural audit.", "Seismic bracing.", "Corrosion inspection.", "Certification issued."]
};

const translations = {
    'en': comicData,
    'es': {
        1: ["Mapeo diagnóstico inicial.", "Aislamiento del sistema.", "Parcheo de fuga con precisión.", "Prueba de flujo y restauración."],
        2: ["Auditoría de uso de agua.", "Retiro de accesorios viejos.", "Instalación de eco-válvulas.", "Verificación de eficiencia."],
        3: ["Modelado BIM 3D.", "Simulación de gradiente de presión.", "Revisión de cumplimiento de código.", "Entrega final de planos."],
        4: ["Retiro de tuberías viejas.", "Enrutamiento de cobre Tipo L.", "Aseguramiento de juntas ProPress.", "Prueba de presión hidrostática."],
        5: ["Prueba de percolación.", "Excavación y nivelación.", "Instalación de bio-reactor.", "Validación de flujo de efluentes."],
        6: ["Instalación subterránea.", "Plomería en estructura.", "Instalación de accesorios.", "Aprobación de inspección municipal."],
        7: ["Retiro de unidad vieja.", "Colocación de bomba de calor.", "Ruta de línea de condensado.", "Configuración eléctrica y WiFi."],
        8: ["Lectura de manómetro.", "Cálculo de tamaño de tanque.", "Montaje y conexión.", "Presurización del sistema."],
        9: ["Inspección con cámara.", "Perfilado acústico.", "Análisis de datos.", "Generación de informe digital."],
        10: ["Evaluación de captación.", "Colocación de cisterna.", "Configuración de filtración.", "Integración de riego."],
        11: ["Cálculo de línea de gas.", "Fijación en pared.", "Instalación de ventilación.", "Prueba de agua caliente continua."],
        12: ["Localización de línea principal.", "Remoción de sección de tubería.", "Integración de válvula inteligente.", "Prueba de conectividad de la app."],
        13: ["Mapeo de paneles de yeso.", "Instalación de PEX/Cobre.", "Configuración de colector.", "Parcheo y pintura."],
        14: ["Desviación de drenaje.", "Colocación de tanque de compensación.", "Limpieza de filtro.", "Prueba de riego de jardín."],
        15: ["Auditoría estructural.", "Refuerzo sísmico.", "Inspección de corrosión.", "Emisión de certificación."]
    },
    'zh': {
        1: ["初步诊断映射。", "系统隔离。", "精准漏水修补。", "流量测试与恢复。"],
        2: ["用水审计。", "拆除旧固定装置。", "安装生态阀门。", "系统效率验证。"],
        3: ["3D BIM 建模。", "压力梯度模拟。", "合规性检查。", "最终蓝图交付。"],
        4: ["拆除旧管道。", "L型铜管布线。", "ProPress接头固定。", "静水压测试。"],
        5: ["渗水测试。", "挖掘和平整。", "生物反应器安装。", "污水流量验证。"],
        6: ["地基粗加工。", "顶部管道铺设。", "固定装置设置。", "通过城市检查。"],
        7: ["旧设备清运。", "热泵放置。", "冷凝水管布线。", "电气和WiFi设置。"],
        8: ["压力表读数。", "水箱尺寸计算。", "安装和连接。", "系统加压。"],
        9: ["摄像头检查。", "声学分析。", "数据分析。", "生成数字报告。"],
        10: ["集水评估。", "水箱放置。", "过滤设置。", "灌溉整合。"],
        11: ["燃气管线计算。", "壁挂固定。", "通风安装。", "持续热水测试。"],
        12: ["主管线定位。", "移除管段。", "智能阀门整合。", "应用连接测试。"],
        13: ["干墙映射。", "PEX/铜管拉放。", "分水器配置。", "修补和喷漆。"],
        14: ["排水导流。", "缓冲水箱放置。", "过滤器清洁。", "花园灌溉测试。"],
        15: ["结构审计。", "抗震支撑。", "腐蚀检查。", "颁发认证。"]
    },
    'tl': {
        1: ["Pangunahing diagnostic mapping.", "System isolation.", "Precision na pagtagpi sa tulo.", "Flow test at pagpapanumbalik."],
        2: ["Audit sa paggamit ng tubig.", "Pag-alis ng lumang fixtures.", "Pag-install ng eco-valves.", "System efficiency verification."],
        3: ["3D BIM modeling.", "Pressure gradient simulation.", "Code compliance check.", "Final blueprint delivery."],
        4: ["Pag-alis ng lumang tubo.", "Type L copper routing.", "ProPress joint securing.", "Hydrostatic pressure test."],
        5: ["Percolation testing.", "Pag-aayos at paghuhukay.", "Bio-reactor installation.", "Effluent flow validation."],
        6: ["Foundation rough-in.", "Top-out plumbing.", "Fixture setting.", "City inspection pass."],
        7: ["Pag-alis ng lumang unit.", "Paglalagay ng heat pump.", "Condensate line routing.", "Electrical at WiFi setup."],
        8: ["Pagbasa sa pressure gauge.", "Tank sizing calculation.", "Mounting at koneksyon.", "System pressurization."],
        9: ["Camera inspection.", "Acoustic profiling.", "Data analysis.", "Digital report generation."],
        10: ["Catchment assessment.", "Paglalagay ng cistern.", "Filtration setup.", "Irrigation integration."],
        11: ["Gas line calculation.", "Wall mount securing.", "Venting installation.", "Endless hot water test."],
        12: ["Main line location.", "Pipe section removal.", "Smart valve integration.", "App connectivity test."],
        13: ["Drywall mapping.", "PEX/Copper pulling.", "Manifold configuration.", "Patching at pagpipinta."],
        14: ["Drain diversion.", "Surge tank placement.", "Filter cleaning.", "Garden irrigation test."],
        15: ["Structural audit.", "Seismic bracing.", "Corrosion inspection.", "Certification issued."]
    },
    'vi': {
        1: ["Lập bản đồ chẩn đoán ban đầu.", "Cách ly hệ thống.", "Vá rò rỉ chính xác.", "Kiểm tra lưu lượng và khôi phục."],
        2: ["Kiểm toán việc sử dụng nước.", "Loại bỏ thiết bị cũ.", "Lắp đặt van sinh thái.", "Xác minh hiệu quả hệ thống."],
        3: ["Mô hình hóa BIM 3D.", "Mô phỏng gradient áp suất.", "Kiểm tra tuân thủ mã.", "Giao bản thiết kế cuối cùng."],
        4: ["Loại bỏ ống cũ.", "Định tuyến đồng loại L.", "Bảo đảm khớp nối ProPress.", "Kiểm tra áp suất thủy tĩnh."],
        5: ["Kiểm tra độ thấm.", "Đào bới và san lấp.", "Lắp đặt lò phản ứng sinh học.", "Xác nhận lưu lượng nước thải."],
        6: ["Thô nền móng.", "Lắp đặt ống nước trên cao.", "Thiết lập thiết bị.", "Vượt qua kiểm tra thành phố."],
        7: ["Vận chuyển thiết bị cũ đi.", "Vị trí đặt máy bơm nhiệt.", "Định tuyến đường ống ngưng tụ.", "Thiết lập điện và WiFi."],
        8: ["Đọc đồng hồ đo áp suất.", "Tính toán kích thước bể.", "Gắn kết và kết nối.", "Điều áp hệ thống."],
        9: ["Kiểm tra bằng camera.", "Lập hồ sơ âm thanh.", "Phân tích dữ liệu.", "Tạo báo cáo kỹ thuật số."],
        10: ["Đánh giá lưu vực.", "Vị trí đặt bể chứa.", "Thiết lập lọc.", "Tích hợp tưới tiêu."],
        11: ["Tính toán đường ống gas.", "Gắn chặt vào tường.", "Lắp đặt hệ thống thông gió.", "Thử nghiệm nước nóng vô tận."],
        12: ["Vị trí đường ống chính.", "Loại bỏ phần ống.", "Tích hợp van thông minh.", "Thử nghiệm kết nối ứng dụng."],
        13: ["Lập bản đồ tường khô.", "Kéo PEX/Đồng.", "Cấu hình ống góp.", "Vá và sơn."],
        14: ["Chuyển hướng cống.", "Vị trí đặt bể tăng áp.", "Làm sạch bộ lọc.", "Thử nghiệm tưới vườn."],
        15: ["Kiểm toán cấu trúc.", "Giằng chống động đất.", "Kiểm tra ăn mòn.", "Cấp chứng nhận."]
    }
};

let appjs = fs.readFileSync('app.js', 'utf8');

const langs = ['en', 'es', 'zh', 'tl', 'vi'];

for (const lang of langs) {
    const marker = '"' + lang + '": {';
    
    let insertionString = "";
    for (let i = 1; i <= 15; i++) {
        for (let step = 0; step < 4; step++) {
            const key = `svc_${i}_step_${step + 1}`;
            const text = translations[lang][i][step];
            insertionString += `        "${key}": "${text}",\n`;
        }
    }
    
    appjs = appjs.replace(marker, marker + '\n' + insertionString);
}

fs.writeFileSync('app.js', appjs);
console.log("Injected comic translations into app.js");
