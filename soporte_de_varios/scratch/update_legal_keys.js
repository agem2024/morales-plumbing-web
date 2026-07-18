const fs = require('fs');

const appJsPath = './app.js';
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

const oldKeys = {
  en: {
    "promo_wp_legal_title": "Legal Terms, Mandates & Rebates",
    "promo_wp_legal_mandate_title": "1. BAAQMD Mandate (Reg 9, Rule 6):",
    "promo_wp_legal_mandate_desc": "Effective January 1, 2027, the installation of natural gas water heaters is strictly prohibited in the Bay Area. This promotion future-proofs your home.",
    "promo_wp_legal_rebates_title": "2. Incentives & Rebates:",
    "promo_wp_legal_rebates_desc": "Heat pump installations qualify for the Federal IRA Tax Credit (up to $2,000) and TECH Clean California rebates (up to $3,100). Funds are limited, first-come first-served, and ZIP-code dependent.",
    "promo_wp_legal_apply_title": "3. Eligibility & Application:",
    "promo_wp_legal_apply_desc": "Applies to residential property owners replacing older units. If your electrical panel requires upgrading to support 240V, additional subsidies may apply.",
    "promo_wp_legal_time_title": "4. Timeframe & Disclaimer:",
    "promo_wp_legal_time_desc": "The transition window is open now. Morales Plumbing provides certified equipment and rebate application paperwork, but does not guarantee State approval or payout timelines."
  },
  es: {
    "promo_wp_legal_title": "Términos Legales, Mandatos y Reembolsos",
    "promo_wp_legal_mandate_title": "1. Mandato BAAQMD (Reg 9, Regla 6):",
    "promo_wp_legal_mandate_desc": "A partir del 1 de enero de 2027, la instalación de calentadores a gas estará estrictamente prohibida en el Área de la Bahía. Esta promoción prepara su hogar para el futuro.",
    "promo_wp_legal_rebates_title": "2. Incentivos y Reembolsos (Rebates):",
    "promo_wp_legal_rebates_desc": "Las bombas de calor califican para el Crédito Fiscal Federal IRA (hasta $2,000) y reembolsos de TECH Clean CA (hasta $3,100). Los fondos son limitados y dependen del código postal.",
    "promo_wp_legal_apply_title": "3. Requisitos de Aplicación:",
    "promo_wp_legal_apply_desc": "Aplica para propietarios residenciales que reemplacen equipos antiguos. Si su panel eléctrico requiere actualización a 240V, podría calificar para subsidios adicionales.",
    "promo_wp_legal_time_title": "4. Vigencia y Responsabilidad:",
    "promo_wp_legal_time_desc": "La ventana de transición es ahora. Morales Plumbing provee equipos certificados y el papeleo para el reembolso, pero no garantiza la aprobación ni los tiempos de pago del Estado."
  },
  zh: {
    "promo_wp_legal_title": "法律条款、强制性规定和退款",
    "promo_wp_legal_mandate_title": "1. BAAQMD 规定（第 9 条，第 6 款）：",
    "promo_wp_legal_mandate_desc": "自2027年1月1日起，湾区严禁安装天然气热水器。此促销活动为您的家庭适应未来发展做好准备。",
    "promo_wp_legal_rebates_title": "2. 激励措施和退款：",
    "promo_wp_legal_rebates_desc": "热泵安装有资格获得联邦 IRA 税收抵免（最高 2,000 美元）和 TECH Clean California 退款（最高 3,100 美元）。资金有限，先到先得，并取决于邮政编码。",
    "promo_wp_legal_apply_title": "3. 资格和申请：",
    "promo_wp_legal_apply_desc": "适用于更换旧设备的住宅业主。如果您的配电盘需要升级以支持 240V，可能适用额外的补贴。",
    "promo_wp_legal_time_title": "4. 时间表和免责声明：",
    "promo_wp_legal_time_desc": "过渡窗口现已开启。Morales Plumbing 提供经过认证的设备和退款申请文件，但不保证州的批准或付款时间表。"
  },
  tl: {
    "promo_wp_legal_title": "Mga Legal na Tuntunin, Mandato, at Rebate",
    "promo_wp_legal_mandate_title": "1. Mandato ng BAAQMD (Reg 9, Rule 6):",
    "promo_wp_legal_mandate_desc": "Simula Enero 1, 2027, mahigpit na ipinagbabawal ang pag-install ng mga natural gas water heater sa Bay Area. Inihahanda ng promosyong ito ang iyong tahanan para sa hinaharap.",
    "promo_wp_legal_rebates_title": "2. Mga Insentibo at Rebate:",
    "promo_wp_legal_rebates_desc": "Ang pag-install ng heat pump ay kwalipikado para sa Federal IRA Tax Credit (hanggang $2,000) at TECH Clean California rebates (hanggang $3,100). Limitado ang pondo, first-come first-served, at nakadepende sa ZIP-code.",
    "promo_wp_legal_apply_title": "3. Kwalipikasyon at Aplikasyon:",
    "promo_wp_legal_apply_desc": "Naaangkop sa mga may-ari ng residential na nagpapalit ng lumang unit. Kung nangangailangan ang iyong electrical panel ng pag-upgrade para suportahan ang 240V, maaaring may karagdagang tulong pinansyal.",
    "promo_wp_legal_time_title": "4. Panahon at Disclaimer:",
    "promo_wp_legal_time_desc": "Bukas na ngayon ang panahon ng transisyon. Ang Morales Plumbing ay nagbibigay ng mga sertipikadong kagamitan at mga dokumento para sa rebate application, ngunit hindi ginagarantiyahan ang pag-apruba ng Estado o ang oras ng pagbabayad."
  },
  vi: {
    "promo_wp_legal_title": "Điều khoản Pháp lý, Quy định & Hoàn tiền",
    "promo_wp_legal_mandate_title": "1. Quy định của BAAQMD (Quy định 9, Quy tắc 6):",
    "promo_wp_legal_mandate_desc": "Kể từ ngày 1 tháng 1 năm 2027, việc lắp đặt máy nước nóng gas tự nhiên bị nghiêm cấm ở Khu vực Vịnh (Bay Area). Khuyến mãi này giúp ngôi nhà của bạn bắt kịp xu hướng tương lai.",
    "promo_wp_legal_rebates_title": "2. Ưu đãi & Hoàn tiền (Rebates):",
    "promo_wp_legal_rebates_desc": "Việc lắp đặt máy bơm nhiệt đủ điều kiện nhận Tín dụng Thuế Liên bang IRA (lên đến 2.000 đô la) và hoàn tiền TECH Clean California (lên đến 3.100 đô la). Quỹ có hạn, ưu tiên người đến trước và tùy thuộc vào mã ZIP.",
    "promo_wp_legal_apply_title": "3. Điều kiện & Đăng ký:",
    "promo_wp_legal_apply_desc": "Áp dụng cho chủ sở hữu bất động sản dân dụng thay thế các thiết bị cũ. Nếu bảng điện của bạn cần được nâng cấp để hỗ trợ 240V, bạn có thể nhận thêm trợ cấp.",
    "promo_wp_legal_time_title": "4. Khung thời gian & Tuyên bố miễn trừ trách nhiệm:",
    "promo_wp_legal_time_desc": "Thời điểm chuyển đổi đang diễn ra. Morales Plumbing cung cấp thiết bị được chứng nhận và giấy tờ xin hoàn tiền, nhưng không đảm bảo việc phê duyệt của Tiểu bang hoặc tiến độ thanh toán."
  }
};

const newKeys = {
  en: {
    "promo_wp_legal_title": "Official Government Incentives & BAAQMD Mandate",
    "promo_wp_legal_mandate_title": "1. Official BAAQMD Mandate (Reg 9, Rule 6):",
    "promo_wp_legal_mandate_desc": "Effective Jan 1, 2027, the installation of natural gas water heaters is strictly prohibited in the Bay Area. Our installation packages are engineered specifically to comply with this law.",
    "promo_wp_legal_rebates_title": "2. State & Federal Rebates:",
    "promo_wp_legal_rebates_desc": "The heat pumps in our packages qualify for the real Federal IRA Tax Credit (up to $2,000) and TECH Clean California state rebates (up to $3,100). Funds are state-managed, limited, and ZIP-code dependent.",
    "promo_wp_legal_apply_title": "3. Eligibility & Extra Services:",
    "promo_wp_legal_apply_desc": "Applies to residential owners replacing old units. Upgrading to our premium packages with extra services (e.g., 240V electrical panel upgrades) may qualify you for additional government subsidies.",
    "promo_wp_legal_time_title": "4. Timeframe & State Disclaimers:",
    "promo_wp_legal_time_desc": "The 2027 mandate is official. Morales Plumbing installs the certified equipment and provides the paperwork, but we are not a government entity; final approval and payouts depend entirely on State programs."
  },
  es: {
    "promo_wp_legal_title": "Incentivos Gubernamentales Oficiales y Mandato BAAQMD",
    "promo_wp_legal_mandate_title": "1. Mandato Oficial BAAQMD (Reg 9, Regla 6):",
    "promo_wp_legal_mandate_desc": "A partir del 1 de enero de 2027, la instalación de calentadores a gas natural está estrictamente prohibida en el Área de la Bahía. Nuestros paquetes están diseñados para cumplir con esta ley.",
    "promo_wp_legal_rebates_title": "2. Reembolsos Estatales y Federales:",
    "promo_wp_legal_rebates_desc": "Las bombas de calor en nuestros paquetes califican para el Crédito Fiscal Federal IRA real (hasta $2,000) y el programa estatal TECH Clean California (hasta $3,100). Fondos administrados por el Estado.",
    "promo_wp_legal_apply_title": "3. Requisitos y Servicios Extra:",
    "promo_wp_legal_apply_desc": "Aplica al reemplazar equipos antiguos. Elegir nuestros paquetes premium con servicios extra (ej. actualización de panel a 240V) podría calificarle para subsidios gubernamentales adicionales.",
    "promo_wp_legal_time_title": "4. Vigencia y Exención de Responsabilidad:",
    "promo_wp_legal_time_desc": "La ley 2027 es oficial. Morales Plumbing instala el equipo certificado y entrega el papeleo, pero no somos entidad de gobierno; la aprobación y los pagos dependen exclusivamente del Estado."
  },
  zh: {
    "promo_wp_legal_title": "官方政府奖励和 BAAQMD 规定",
    "promo_wp_legal_mandate_title": "1. 官方 BAAQMD 规定（第 9 条，第 6 款）：",
    "promo_wp_legal_mandate_desc": "自 2027 年 1 月 1 日起，湾区严禁安装天然气热水器。我们的安装包专为遵守此法律而设计。",
    "promo_wp_legal_rebates_title": "2. 州和联邦退款：",
    "promo_wp_legal_rebates_desc": "我们套餐中的热泵有资格获得真正的联邦 IRA 税收抵免（最高 2,000 美元）和 TECH Clean California 州退款（最高 3,100 美元）。资金由州政府管理，额度有限。",
    "promo_wp_legal_apply_title": "3. 资格和额外服务：",
    "promo_wp_legal_apply_desc": "适用于更换旧设备的住宅业主。升级到包含额外服务（例如 240V 配电盘升级）的高级套餐可能会让您获得更多政府补贴。",
    "promo_wp_legal_time_title": "4. 时间表和州免责声明：",
    "promo_wp_legal_time_desc": "2027 年的规定是官方的。Morales Plumbing 安装认证设备并提供文书，但我们不是政府实体；最终批准和付款完全取决于州计划。"
  },
  tl: {
    "promo_wp_legal_title": "Mga Opisyal na Insentibo ng Gobyerno at Mandato ng BAAQMD",
    "promo_wp_legal_mandate_title": "1. Opisyal na Mandato ng BAAQMD (Reg 9, Rule 6):",
    "promo_wp_legal_mandate_desc": "Simula Enero 1, 2027, mahigpit na ipinagbabawal ang pag-install ng mga natural gas water heater sa Bay Area. Ang aming mga package ay sadyang idinisenyo para sumunod sa batas na ito.",
    "promo_wp_legal_rebates_title": "2. State & Federal Rebates:",
    "promo_wp_legal_rebates_desc": "Kwalipikado ang mga heat pump sa aming mga package para sa totoong Federal IRA Tax Credit (hanggang $2,000) at TECH Clean California state rebates (hanggang $3,100). Ang pondo ay pinamamahalaan ng Estado.",
    "promo_wp_legal_apply_title": "3. Kwalipikasyon at Mga Karagdagang Serbisyo:",
    "promo_wp_legal_apply_desc": "Para sa mga may-ari na nagpapalit ng lumang unit. Ang pag-upgrade sa aming premium packages na may extra services (tulad ng 240V panel upgrade) ay maaaring magbigay sa iyo ng karagdagang subsidyo ng gobyerno.",
    "promo_wp_legal_time_title": "4. Panahon at Disclaimer ng Estado:",
    "promo_wp_legal_time_desc": "Ang mandato ng 2027 ay opisyal. Nag-iinstall ang Morales Plumbing ng sertipikadong kagamitan at nagbibigay ng mga dokumento, ngunit hindi kami ahensya ng gobyerno; ang pinal na desisyon at bayad ay nasa Estado."
  },
  vi: {
    "promo_wp_legal_title": "Các Ưu Đãi Chính Thức Của Chính Phủ & Quy Định BAAQMD",
    "promo_wp_legal_mandate_title": "1. Quy Định Chính Thức Của BAAQMD (Quy định 9, Quy tắc 6):",
    "promo_wp_legal_mandate_desc": "Kể từ ngày 1 tháng 1 năm 2027, việc lắp đặt máy nước nóng gas tự nhiên bị nghiêm cấm ở Khu vực Vịnh. Các gói dịch vụ của chúng tôi được thiết kế đặc biệt để tuân thủ luật này.",
    "promo_wp_legal_rebates_title": "2. Hoàn Tiền Từ Tiểu Bang & Liên Bang:",
    "promo_wp_legal_rebates_desc": "Máy bơm nhiệt trong các gói của chúng tôi đủ điều kiện nhận Tín Dụng Thuế Liên Bang IRA thực (lên đến 2.000$) và hoàn tiền từ bang TECH Clean California (lên đến 3.100$). Quỹ do bang quản lý và có hạn.",
    "promo_wp_legal_apply_title": "3. Điều Kiện & Dịch Vụ Bổ Sung:",
    "promo_wp_legal_apply_desc": "Áp dụng cho chủ nhà thay thế thiết bị cũ. Nâng cấp lên gói cao cấp với các dịch vụ bổ sung (ví dụ: nâng cấp bảng điện 240V) có thể giúp bạn nhận thêm trợ cấp chính phủ.",
    "promo_wp_legal_time_title": "4. Thời Gian & Miễn Trừ Trách Nhiệm:",
    "promo_wp_legal_time_desc": "Quy định năm 2027 là chính thức. Morales Plumbing lắp đặt thiết bị được chứng nhận và cung cấp giấy tờ, nhưng chúng tôi không phải cơ quan chính phủ; việc phê duyệt và thanh toán hoàn toàn phụ thuộc vào tiểu bang."
  }
};

let modified = false;
for (const lang of Object.keys(oldKeys)) {
    for (const [key, oldVal] of Object.entries(oldKeys[lang])) {
        const newVal = newKeys[lang][key];
        if (newVal) {
            // Replace the exact old definition with the new one
            const oldString = `"${key}": "${oldVal.replace(/"/g, '\\"')}"`;
            const newString = `"${key}": "${newVal.replace(/"/g, '\\"')}"`;
            if (appJsContent.includes(oldString)) {
                appJsContent = appJsContent.replace(oldString, newString);
                modified = true;
            } else {
                console.log("Could not find:", oldString);
            }
        }
    }
}

if (modified) {
    fs.writeFileSync(appJsPath, appJsContent, 'utf8');
    console.log("Replaced strings successfully.");
} else {
    console.log("No modifications made.");
}
