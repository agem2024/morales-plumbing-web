import re

with open('app.js', 'r', encoding='utf-8') as f:
    appjs_content = f.read()

trans = {
    'en': {
        "diy_custom_title": "AI Home Diagnostic",
        "diy_custom_desc": "Describe your issue to Joe AI to get a real-time diagnosis, materials, and estimated budget.",
        "diy_disposal_title": "Garbage Disposal Jam",
        "diy_disposal_desc": "Learn how to safely unjam your disposal using an Allen wrench in under 2 minutes.",
        "diy_heater_title": "Water Heater Reset",
        "diy_heater_desc": "No hot water? Step-by-step guide to check the pilot light and reset the thermal switch.",
        "diy_toilet_title": "Running Toilet Fix",
        "diy_toilet_desc": "Stop wasting water. Identify a bad flapper valve or adjust the fill float instantly.",
        "diy_sink_title": "Unclog Sink P-Trap",
        "diy_sink_desc": "Clear a blocked bathroom or kitchen sink without harsh chemicals.",
        "diy_shower_title": "Low Shower Pressure",
        "diy_shower_desc": "Descale your showerhead for maximum flow and pressure restoration.",
        "diy_valve_title": "Emergency Shut-Off",
        "diy_valve_desc": "Locate and shut off your main water valve to prevent flood damage.",
        "diy_faucet_title": "Fix Leaky Faucet",
        "diy_faucet_desc": "Stop the annoying drip by replacing the internal cartridge.",
        "diy_gfi_title": "GFI Outlet Reset",
        "diy_gfi_desc": "No power to the disposal or water heater? Try this quick electrical reset.",
        "diy_smell_title": "Eliminate Sewer Odor",
        "diy_smell_desc": "Fix bad smells coming from your drains with a simple trap prime."
    },
    'es': {
        "diy_custom_title": "Diagnóstico en Casa (AI)",
        "diy_custom_desc": "Describe libremente tu problema a Joe AI para obtener un diagnóstico en tiempo real, materiales y presupuesto estimado.",
        "diy_disposal_title": "Triturador Atascado",
        "diy_disposal_desc": "Aprende a destrabar tu triturador de basura con una llave Allen en menos de 2 minutos.",
        "diy_heater_title": "Reinicio Calentador",
        "diy_heater_desc": "¿Sin agua caliente? Guía paso a paso para revisar el piloto y reiniciar el switch térmico.",
        "diy_toilet_title": "Fuga de Inodoro",
        "diy_toilet_desc": "Deja de desperdiciar agua. Identifica un flapper dañado o ajusta el flotador al instante.",
        "diy_sink_title": "Destapar Trampa P",
        "diy_sink_desc": "Limpia un lavamanos o fregadero bloqueado sin usar químicos dañinos.",
        "diy_shower_title": "Baja Presión en Regadera",
        "diy_shower_desc": "Descalcifica tu regadera para restaurar el flujo máximo de agua y presión.",
        "diy_valve_title": "Cierre de Emergencia",
        "diy_valve_desc": "Localiza y cierra la válvula principal de agua para prevenir inundaciones.",
        "diy_faucet_title": "Reparar Llave que Gotea",
        "diy_faucet_desc": "Detén el molesto goteo reemplazando el cartucho interno de la llave.",
        "diy_gfi_title": "Reinicio de Enchufe GFI",
        "diy_gfi_desc": "¿Sin energía en el triturador? Prueba este rápido reinicio eléctrico.",
        "diy_smell_title": "Eliminar Mal Olor",
        "diy_smell_desc": "Elimina los olores a alcantarilla llenando de agua las trampas secas."
    },
    'zh': {
        "diy_custom_title": "AI 家庭诊断",
        "diy_custom_desc": "向 Joe AI 描述您的问题，获取实时诊断、材料和预算估算。",
        "diy_disposal_title": "垃圾处理器卡住",
        "diy_disposal_desc": "了解如何使用内六角扳手在 2 分钟内安全解除垃圾处理器卡顿。",
        "diy_heater_title": "热水器重置",
        "diy_heater_desc": "没有热水？检查指示灯和重置热敏开关的逐步指南。",
        "diy_toilet_title": "马桶漏水维修",
        "diy_toilet_desc": "停止浪费水。立即识别损坏的挡水阀或调整注水浮子。",
        "diy_sink_title": "疏通水槽 P 型管",
        "diy_sink_desc": "无需刺激性化学物质即可清理堵塞的浴室或厨房水槽。",
        "diy_shower_title": "淋浴水压低",
        "diy_shower_desc": "清除淋浴头水垢，恢复最大水流和水压。",
        "diy_valve_title": "紧急切断",
        "diy_valve_desc": "找到并关闭主水阀，以防止洪水破坏。",
        "diy_faucet_title": "修复漏水水龙头",
        "diy_faucet_desc": "通过更换内部滤芯来停止烦人的滴水。",
        "diy_gfi_title": "GFI 插座重置",
        "diy_gfi_desc": "处理器或热水器没有电？尝试这个快速电气重置。",
        "diy_smell_title": "消除下水道异味",
        "diy_smell_desc": "通过简单的存水弯注水解决排水管发出的臭味。"
    },
    'tl': {
        "diy_custom_title": "AI Home Diagnostic",
        "diy_custom_desc": "Ilarawan ang iyong isyu kay Joe AI para makakuha ng real-time na diagnosis, materyales, at estimated budget.",
        "diy_disposal_title": "Garbage Disposal Jam",
        "diy_disposal_desc": "Alamin kung paano ligtas na alisin ang bara ng iyong disposal gamit ang Allen wrench sa loob ng 2 minuto.",
        "diy_heater_title": "Water Heater Reset",
        "diy_heater_desc": "Walang mainit na tubig? Step-by-step na gabay para suriin ang pilot light at i-reset ang thermal switch.",
        "diy_toilet_title": "Running Toilet Fix",
        "diy_toilet_desc": "Itigil ang pag-aaksaya ng tubig. Kilalanin ang sirang flapper valve o i-adjust ang fill float agad.",
        "diy_sink_title": "Unclog Sink P-Trap",
        "diy_sink_desc": "Linisin ang baradong banyo o lababo sa kusina nang walang matatapang na kemikal.",
        "diy_shower_title": "Mababang Pressure sa Shower",
        "diy_shower_desc": "Alisin ang kaliskis sa iyong showerhead para sa maximum flow at pressure restoration.",
        "diy_valve_title": "Emergency Shut-Off",
        "diy_valve_desc": "Hanapin at patayin ang iyong pangunahing water valve para maiwasan ang baha.",
        "diy_faucet_title": "Ayusin ang Tumutulong Gripo",
        "diy_faucet_desc": "Itigil ang nakakainis na pagtulo sa pamamagitan ng pagpapalit ng internal cartridge.",
        "diy_gfi_title": "GFI Outlet Reset",
        "diy_gfi_desc": "Walang kuryente sa disposal o water heater? Subukan itong mabilis na electrical reset.",
        "diy_smell_title": "Tanggalin ang Amoy Imburnal",
        "diy_smell_desc": "Ayusin ang mabahong amoy mula sa iyong mga drain gamit ang simpleng trap prime."
    },
    'vi': {
        "diy_custom_title": "Chẩn đoán nhà AI",
        "diy_custom_desc": "Mô tả vấn đề của bạn cho Joe AI để được chẩn đoán, vật liệu và dự toán ngân sách theo thời gian thực.",
        "diy_disposal_title": "Kẹt máy xay rác",
        "diy_disposal_desc": "Tìm hiểu cách tháo kẹt an toàn bằng cờ lê Allen trong chưa đầy 2 phút.",
        "diy_heater_title": "Khởi động lại máy nước nóng",
        "diy_heater_desc": "Không có nước nóng? Hướng dẫn từng bước để kiểm tra đèn hoa tiêu và đặt lại công tắc nhiệt.",
        "diy_toilet_title": "Sửa bồn cầu chảy nước",
        "diy_toilet_desc": "Ngừng lãng phí nước. Xác định van cao su hỏng hoặc điều chỉnh phao cấp nước ngay lập tức.",
        "diy_sink_title": "Thông tắc P-Trap bồn rửa",
        "diy_sink_desc": "Làm sạch bồn rửa mặt hoặc bồn rửa bát bị tắc mà không cần hóa chất độc hại.",
        "diy_shower_title": "Áp lực vòi sen yếu",
        "diy_shower_desc": "Tẩy cặn vòi hoa sen của bạn để phục hồi lưu lượng và áp lực tối đa.",
        "diy_valve_title": "Khóa nước khẩn cấp",
        "diy_valve_desc": "Định vị và khóa van nước chính của bạn để ngăn ngừa thiệt hại do ngập lụt.",
        "diy_faucet_title": "Sửa vòi nước rò rỉ",
        "diy_faucet_desc": "Chấm dứt việc nhỏ giọt khó chịu bằng cách thay thế lõi bên trong.",
        "diy_gfi_title": "Đặt lại ổ cắm GFI",
        "diy_gfi_desc": "Không có điện cho máy xay rác hoặc máy nước nóng? Thử đặt lại điện nhanh chóng.",
        "diy_smell_title": "Loại bỏ mùi cống",
        "diy_smell_desc": "Khắc phục mùi hôi phát ra từ cống thoát nước của bạn bằng cách mồi bẫy nước đơn giản."
    }
}

for lang in ['en', 'es', 'zh', 'tl', 'vi']:
    lang_marker = f'"{lang}": {{'
    if lang_marker in appjs_content:
        injected_str = "\n"
        for k, v in trans[lang].items():
            injected_str += f'        "{k}": "{v}",\n'
        appjs_content = appjs_content.replace(lang_marker, lang_marker + injected_str)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(appjs_content)
    
print("Added old 10 DIY guides translations to app.js!")
