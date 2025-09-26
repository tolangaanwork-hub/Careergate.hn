const jobs = [
  {id:1, title:"SOFTWARE DEVELOPER ",time:`Thứ 2 - Thứ 6 (từ 09:00 đến 18:00)
`, location:`- Đà Nẵng: 2F Vinh Trung Plaza, No. 255-257 Hung Vuong, Vinh Trung, Thanh Khê
- Hà Nội: Tầng 4, Artemis, Số 3 Lê Trọng Tấn, Phương Liệt, Thanh Xuân
`, category:"it", company:"FIS", description:`- Làm việc chặt chẽ với nhóm Sản phẩm để thu thập và xác định các yêu cầu chức năng cho sản phẩm/tính năng mới và làm việc với nhóm QC và nhóm Hệ thống để thử nghiệm và triển khai mã vào sản xuất
- Tham gia sửa lỗi và giải quyết vấn đề, nghiên cứu và đề xuất ý tưởng để cải thiện các vấn đề kỹ thuật
- Xây dựng mã và thư viện có thể tái sử dụng để sử dụng trong tương lai
- Khắc phục sự cố, thử nghiệm và bảo trì phần mềm và cơ sở dữ liệu sản phẩm cốt lõi để đảm bảo tối ưu hóa và chức năng mạnh mẽ
- Sáng tạo, đề xuất ý tưởng phát triển sản phẩm của công ty
- Bảo trì, sửa lỗi và phát triển hệ thống phần mềm doanh nghiệp (cơ sở dữ liệu + hệ thống phụ trợ)
- Phát triển các tính năng mới của hệ thống`	, benefits: `-	Lương tháng 13, thưởng dự án, xét tăng lương hàng năm
-	Trợ cấp ăn trưa và gửi xe miễn phí
-	Quà tặng (Tết dương lịch, sinh nhật, 8/3, 20/10…)
-	Tổ chức team building cho nhân viên.
-	Bảo hiểm sau 2 tháng thử việc.
-	Đào tạo trong công việc và đẩy nhanh con đường sự nghiệp của bạn
-	Làm việc trong môi trường thân thiện và chuyên nghiệp
`,requirements:`
- Tốt nghiệp Đại học trở lên chuyên ngành Khoa học Máy tính/ Công nghệ thông tin hoặc tương đương
- Từ 4 năm lập trình Java/Spring Boot, đã từng triển khai 2-3 dự án
- Thuần thục Java Core: OOP, multi-threading, collections, exception handling
- Spring Boot: Dependency Injection, Bean Lifecycle, Configuration
- Có kinh nghiệm áp dụng Design Pattern & Principle cơ bản: SOLID, Factory, Singleton, Strategy, Repository
- Kinh nghiệm làm bảo mật, Spring Security: Authentication, Authorization, JWT, OAuth2
- SQL & Database: Indexing, Query Optimization, ACID, Transaction
- Phát triển và vận hành các hệ thống với tải cao: caching, loadbalance, Parallel Processing,
Monitoring and Performance Tuning, Scalability, Testing and Benchmarking
- Kinh nghiệm làm việc hoặc có kiến thức trong môi trường áp dụng DevOp. 
- Hiểu rõ các khái niệm quan trọng như CICD, infrastructure as code, Containerization, orchestration`, contact:"hr@abc.com", src:"fis.png"},
  {id:2, title:"Chuyên viên phân tích tài chính", category:"finance", company:"FinanceCorp", description:"Phân tích số liệu tài chính", requirements:"Excel, CFA là lợi thế", contact:"jobs@financecorp.com"},
  {id:3, title:"Nhân viên Marketing Online", category:"marketing", company:"MKT Agency", description:"Triển khai chiến dịch digital", requirements:"SEO, Ads", contact:"apply@mkt.com"},
  {id:4, title:"UI/UX Designer", category:"design", company:"DesignPro", description:"Thiết kế giao diện sản phẩm", requirements:"Figma, Adobe XD", contact:"hr@designpro.com"},
   {id:5, title:"Kỹ sư AI", category:"it", company:"AI Solutions", description:`Nghiên cứu, xây dựng và triển khai các mô hình Trí tuệ nhân tạo (AI), Học máy (Machine Learning) và Học sâu (Deep Learning) vào sản phẩm/dịch vụ của công ty.
Phát triển, tối ưu hóa và triển khai các thuật toán xử lý dữ liệu lớn, thị giác máy tính (Computer Vision), xử lý ngôn ngữ tự nhiên (NLP), hoặc hệ thống gợi ý (Recommendation Systems).
Phối hợp với các bộ phận kỹ thuật để tích hợp AI vào ứng dụng thực tế.
Thường xuyên cập nhật các xu hướng công nghệ mới, nghiên cứu áp dụng vào dự án.`, requirements:`Tốt nghiệp Đại học/Cao học ngành Công nghệ thông tin, Khoa học dữ liệu, Toán – Tin hoặc các ngành liên quan.
Có kiến thức vững về Machine Learning, Deep Learning, xử lý dữ liệu.
Thành thạo ít nhất một ngôn ngữ lập trình: Python, Java, hoặc C++.
Có kinh nghiệm làm việc với các thư viện/framework như TensorFlow, PyTorch, Scikit-learn, Keras.
Hiểu biết về cơ sở dữ liệu (SQL/NoSQL) và triển khai mô hình trên cloud (AWS, GCP, Azure) là lợi thế.
Tư duy logic tốt, khả năng giải quyết vấn đề và làm việc nhóm.
Có ít nhất 1–2 năm kinh nghiệm trong lĩnh vực AI/ML (chấp nhận sinh viên mới tốt nghiệp xuất sắc).`,time:`Thứ 2 – Thứ 6 (09:00 – 18:00)
Nghỉ thứ 7, Chủ nhật và các ngày lễ theo quy định.`,benefits:`Mức lương cạnh tranh theo năng lực (thoả thuận trong phỏng vấn).
Thưởng dự án, thưởng hiệu suất định kỳ.
Chế độ BHXH, BHYT, BHTN đầy đủ theo quy định.
Môi trường làm việc trẻ trung, năng động, có cơ hội học hỏi và tiếp cận công nghệ mới.
Cơ hội tham gia các khoá đào tạo, hội thảo về AI/ML.`,location:`Hà Nội: 112 Láng Hạ, Hà Nội
TP. Hồ Chí Minh: Tòa nhà Himorin,Q4,HCM`, contact:"careers@aisolutions.com",src:"ai_solutio.png"},
  {id:6, title:"Chuyên viên kiểm toán", category:"finance", company:"Audit VN", description:"Kiểm toán báo cáo tài chính", requirements:"Kinh nghiệm 2 năm", contact:"apply@auditvn.com"},
  {id:7, title:"Content Creator", category:"marketing", company:"MediaHub", description:"Sáng tạo nội dung mạng xã hội", requirements:"Khả năng viết tốt", contact:"hr@mediahub.com"},
  {id:8, title:"Graphic Designer", category:"design", company:"ArtStudio", description:"Thiết kế ấn phẩm truyền thông", requirements:"Photoshop, Illustrator",benefits: ``,time:"time", location:"hanoi", contact:"jobs@artstudio.com"},
  {id:9, title:"	DATA ANALYST", category:"it", company:"MB bank", description:`-	Thu thập, phân tích yêu cầu nghiệp vụ tài chính – ngân hàng; xây dựng BRD, SRS, Use Case/User Story.
-	Phân tích, thiết kế báo cáo quản trị, báo cáo hoạt động, mô hình phân tích đa chiều (BI, DWH, ODS).
-	Xác định nguồn dữ liệu (Core Banking, LOS, CRM...), tham gia Data Profiling, Data Mapping, Data Lineage.
-	Phối hợp với Data Engineer, ETL, BI Developer để chuyển đổi yêu cầu nghiệp vụ thành giải pháp kỹ thuật.
-	Viết test case, tham gia kiểm thử dữ liệu và báo cáo.
-	Quản lý thay đổi yêu cầu, đảm bảo traceability từ business → technical → báo cáo.
-	Chuẩn hóa quy trình, biên soạn và quản lý tài liệu dự án.
-	Giám sát công việc của team, báo cáo tiến độ cho quản lý trực tiếp.
`, requirements:`-	Bằng cử nhân, tốt nghiệp các ngành Kế toán – Kiểm toán, Hệ thống thông tin quản lý, Công nghệ thông tin, Ngân hàng hoặc các ngành có liên quan khác
-	Có kinh nghiệm về triển khai các hệ thống công nghệ thông tin, các hệ thống ODS, DWH, BI dành cho ngân hàng và công ty tài chính.
-	Có kiến thức về các báo cáo tài chính của ngân hàng, công ty tài chính
-	Có kiến thức về các hệ thống Core (Flexcube, T24)
-	Có kiến thức về SQL và code.
-	Có hoặc đang học các bằng cấp nghiệp vụ (ACCA, CFA, CMA, v.v) hoặc tương đương.
-	Tối thiểu 4 năm kinh nghiệm tại vị trí Business Analyst hoặc tương đương. Tối thiểu 2 năm kinh nghiệm tại vị trí Senior hoặc tương đương.
-	Đã tham gia tối thiểu 1 dự án ETL, DWH của ngân hàng với vai trò BA dữ liệutiếp;
-	Thành thạo tin học văn phòng, biết sử dụng các công cụ phục vụ nghiệp vụ. Tiếng Anh đọc hiểu tài liệu
`,benefits: `-	Chế độ nghỉ (nghỉ hàng tuần, phép năm, lễ tết...)
-	Được hưởng đầy đủ các chế độ BHXH, BHYT, BHTN và các chế độ khác theo quy định Nhà nước
-	Được đánh giá hiệu quả công việc 06 tháng/lần để làm căn cứ nâng lương, thăng tiến, khen thưởng
-	Được định hướng và có cơ hội thăng tiến, phát triển sự nghiệp theo nguyện vọng.
-	Được hưởng các chế độ phúc lợi khác như: Company trip, Team building, các hoạt động tập thể... của Công ty.
-	Khám sức khỏe định kỳ hàng năm & tham gia bảo hiểm sức khỏe bên ngoài (PVI, Bảo Việt, Bảo Minh,...)
-	Được tạo điều kiện đào tạo nâng cao kiến thức, kỹ năng về CNTT, kỹ năng mềm,... bằng các hội nghị chuyên đề tại công ty, các khóa học tại các đơn vị đào tạo chuyên nghiệp
`,time:`Thứ 2 - Thứ 6 (từ 08:00 đến 17:30)
Sáng thứ 7 theo điều động của PM (nếu phát sinh công việc)

`, location:"Số 18 Lê Văn Lương, Yên Hòa, Cầu Giấy, Thanh Xuân", contact:"jobs@financecorp.com", src:"mb.png"},
  {id:10, title:"	UI/UX DESIGNER", category:"it", company:"Viettel", description:`-	Thiết kế mới hoặc tối ưu store Shopify (desktop & mobile), đảm bảo giao diện trực quan, đẹp mắt
-	Nghiên cứu người dùng, hành vi và nhu cầu để đưa ra giải pháp thiết kế phù hợp với thương hiệu nhận diện của brand
-	Phối hợp chặt chẽ với team sản phẩm, phát triển và marketing để đảm bảo trải nghiệm người dùng nhất quán
-	Đề xuất motion/micro-interaction khả thi (ưu tiên GSAP/CSS) cho hero/scroll-trigger/hover
-	Đảm bảo UI/UX hiện đại, có tính thẩm mỹ, độc đáo, sáng tạo
`, requirements:`-	Tối thiểu 02 năm kinh nghiệm thiết kế UI/UX web (ưu tiên e-commerce/Shopify OS 2.0)
-	Thành thạo Figma (auto-layout, components/variants, prototype), design system, typography, color, wireframes, user flows
-	Biết mô tả motion để dev hiện thực (GSAP là lợi thế); có kiến thức HTML/CSS cơ bản để giao tiếp với dev
-	Portfolio thực tế (ưu tiên website Shopify đang live)
-	Giao tiếp rõ ràng, chủ động, hợp tác tốt.`, benefits: `-	Mức lương thỏa thuận đến 15,000,000/tháng
-	Hỗ trợ ăn trưa/tối: 35,000/buổi, hỗ trợ đi lại: 200,000/tháng
-	Thưởng các ngày Lễ, Tết, thưởng kết quả kinh doanh chung
-	Được hỗ trợ đầy đủ trang thiết bị cần thiết phục vụ cho công việc, Happy Hour hàng tháng
-	Có cơ hội được học hỏi và phát triển nhiều mảng công việc trong ngành thương mại điện tử.
-	Tham gia các hoạt động thường niên: du lịch nghỉ mát, team building,.. cùng công ty
`,time:"Thứ 2 - Thứ 6 (từ 08:30 đến 18:00)", location:"- Hà Nội: Tầng 4, số 11 ngõ 21 Lê Văn Lương, Nhân Chính, Thanh Xuân",contact:"apply@mb.com",src:"vitettel.png"},
  {id:11, title:"FULLSTACK", category:"it", company:"FPT", description:`-	Tham gia phát triển và triển khai các dự án phần mềm trong các lĩnh vực:Tài chính – ngân hàng, thương mại điện tử, logistics, quản lý văn thư, và outsourcing cho khách hàng trong và ngoài nước (MBBank, MSB, VPBank, Sacombank, Viettel, Nhật Bản, ...).
-	Phân tích yêu cầu, nghiên cứu, thiết kế và tối ưu hệ thống cho từng dự án.
-	Nghiên cứu, ứng dụng công nghệ mới (Java, Spring Boot, Angular, Kafka, Docker, Kubernetes, AWS, ...) nhằm nâng cao hiệu năng và khả năng mở rộng sản phẩm.
-	Phát triển API phục vụ ứng dụng Mobile, Web và tích hợp với các hệ thống nội bộ/ngoài hệ thống.
-	Đề xuất giải pháp, đóng góp ý tưởng cải tiến và nâng cao chất lượng sản phẩm.
-	Đảm bảo hiệu suất, tính ổn định và khả năng đáp ứng của ứng dụng.
-	Lập kế hoạch, phối hợp nhóm và chủ động đề xuất hướng phát triển trong công việc.
-	Chi tiết công việc sẽ được trao đổi thêm trong buổi phỏng vấn.
`, requirements:`-	Tốt nghiệp Đại học các chuyên ngành Công nghệ thông tin, Khoa học máy tính, Điện tử viễn thông, Công nghệ phần mềm, Khoa học máy tính, Hệ thống thông tin...
-	Có kinh nghiệm làm việc thực tế tại các công ty hoặc dự án về lập trình Backend
-	Thành thạo 1 trong các ngôn ngữ BackEnd, ưu tiên Java.
-	Thành thạo Spring framework: spring core/ spring sercuity/ spring boots.
-	Thành thạo một trong trong các loại database: Oracle, Sqlserver, PostgreSQL, Mongodb.
-	Có kinh nghiệm trong domain tài chính, ngân hàng, chứng khoán hoặc các hệ thống có số lượng người dùng lớn là lợi thế
`, benefits: `-	Mức lương hấp dẫn với từng năng lực
-	Xét tăng lương hàng năm + thưởng + lương tháng 13
-	Được hưởng các quyền lợi và chế độ theo luật quy định (Các ngày nghỉ lễ, BHXH, BHYT...)
-	Môi trường làm việc chuyên nghiệp, năng động, thân thiện, cơ hội thăng tiến cao
-	Nếu bạn có ý tưởng hấp dẫn, bạn sẽ được bắt đầu dự án của riêng mình tại công ty
-	Bạn sẽ được tham gia các dự án lớn, sử dụng công nghệ, kỹ thuật mới nhất, làm việc cùng những đồng nghiệp và quản lý tài năng.
`, time:"Thứ 2 – Thứ 6 (9h00 – 12h00, 13h30 – 17h30)", location:"- Hà Nội: Tầng 4, căn V7-B01, Khu Shophouse The Terra An Hưng, La Khê, Hà Đông, Hà Đông", contact:"hr@designpro.com",src:"fpt.png"},
  {id:12, title:"QA TESTER", category:"it", company:"Apple", description:`-	Tham gia xây dựng, thực hiện và giám sát quy trình kiểm thử nhằm đảm bảo chất lượng phần mềm trước khi bàn giao.
-	Viết test case chi tiết từ tài liệu yêu cầu hoặc theo luồng người dùng, đảm bảo độ bao phủ cao và dễ hiểu.
-	Thực hiện kiểm thử chức năng, hồi quy, tích hợp và kiểm thử thăm dò (exploratory testing) trên nhiều nền tảng (Web, Mobile...).
-	Phối hợp với đội phát triển để xác định, mô tả và truy vết lỗi phần mềm xuyên suốt vòng đời dự án.
-	Ghi nhận và theo dõi lỗi bằng các công cụ quản lý bug (Jira, Redmine, Backlog...), đảm bảo thông tin chính xác và đầy đủ.
-	Sử dụng DevTools, Console log, Network tab hoặc log server để phân tích và truy vết lỗi.
-	Thực hiện các nhiệm vụ khác theo phân công của Leader.
-	Báo cáo tiến độ kiểm thử và đề xuất cải tiến quy trình khi cần thiết.
-	(Ưu tiên) Có khả năng viết hoặc bảo trì test script tự động với các framework như Selenium, Playwright, CodeceptJS, Cypress... nếu dự án yêu cầu. 
`,benefits: `-	Được tham gia gói Bảo Hiểm Sức Khỏe
-	Du lịch công ty
-	Chế độ thưởng tháng 13
-	Chế độ review lương thưởng
-	Nghỉ phép có lương 12 ngày/năm, nghỉ lễ, Tết theo lịch của Việt Nam.
-	Chế độ “cộng thêm" ngày nghỉ Đặc Biệt theo nội dung Phúc Lợi của riêng công ty.
-	Có cơ hội làm việc và phát triển trong môi trường năng động và công nghệ kỹ thuật tiên tiến.
`, requirements:`Trình độ học vấn:
– Tốt nghiệp Đại học chuyên ngành: An toàn thông tin; Công nghệ thông tin, Khoa học máy tính, Toán – Tin…
– Tiếng Anh tương đương 650 TOEIC trở lên
Kiến thức/Kinh nghiệm:
– Từ 3 năm kinh nghiệm kiểm thử phần mềm, có kinh nghiệm kiểm thử mobile.
– Có khả năng xây dựng tài liệu kiểm thử độc lập dựa trên việc áp dụng các kỹ thuật kiểm thử phần mềm
– Có khả năng phân tích và phản biện về đặc tả yêu cầu phần mềm
– Có khả năng ước lượng nỗ lực kiểm thử và xác định được những rủi ro cho các task được giao
– Có khả năng hướng dẫn, review về thiết kế kiểm thử, kịch bản kiểm thử cho các bạn level thấp hơn hoặc level tương đương
– Có khả năng xây dựng và thực hiện các query cơ bản với hệ cơ sở dữ liệu của sản phẩm để tạo, sửa, xóa hoặc truy vấn dữ liệu với các bảng đơn
– Có khả năng sử dụng các công cụ/framework hỗ trợ kiểm thử có sẵn (như kiểm thử api, kiểm thử hiệu năng web, kiểm thử tự động web/mobile/api)
Kiến thức chuyên môn
– Kiến thức CNTT:
– Nắm vững quy trình phát triển phần mềm, đặc biệt là Agile, Scrum
– Có kiến thức nâng cao về SQL hoặc các hệ cở sở dữ liệu mà sản phẩm sử dụng
– Nắm được giao thức HTTP/HTTPS
– Kiến thức Kiểm thử phần mềm
– Nắm vững quy trình kiểm thử phần mềm được ban hành tại công ty
– Nắm được các mức độ kiểm thử (Kiểm thử thành phần, Kiểm thử tích hợp, Kiểm thử hệ thống, Kiểm thử chấp nhận)
– Nắm được các loại kiểm thử kiểm thử phi chức năng, kiểm thử thăm dò, kiểm thử đoán lỗi
– Hiểu và áp dụng thành thạo các kỹ thuật thiết kế kiểm thử kiểm thử hộp đen, kiểm thử dựa trên kinh nghiệm
– Nắm vững nghiệp vụ hệ thống của sản phẩm tham gia kiểm thử
– Kiến thức chuyên môn ATTT: Không yêu cầu
`,time:"Thứ 2 - Thứ 6 (từ 08:30 đến 18:00)", location:"- Hà Nội: Tòa Tháp Thiên Niên Kỷ, Số 4 Quang Trung, Quang Trung, Hà Đông, Hà Đông", contact:"apply@auditvn.com",src:"apple.png"},
  {id:13, title:"4.	BA BUSINESS ANALYST", category:"it", company:"FSS", description:`- Thu thập thông tin, phân tích yêu cầu và đưa ra giải pháp nghiệp vụ dựa trên yêu cầu đã thu thập.
- Viết các tài liệu quy trình nghiệp vụ, thiết kế chi tiết chức năng phần mềm.
- Tham gia kiểm thử và giám sát việc kiểm thử chất lượng phần mềm, nghiệm thu sản phẩm trước khi thực hiện nhận chuyển giao.
- Giám sát và phối hợp với nhà thầu vận hành hệ thống CNTT.
- Thực hiện các công việc khác khi có yêu cầu của cấp trên.
`, requirements:`- Tốt nghiệp các trường: Đại Học Bách Khoa, HV Công Nghệ Bưu Chính Viễn Thông, HV Kỹ Thuật Mật Mã, Đại Học Quốc Gia....chuyên ngành CNTT, điện tử viễn thông, khoa học máy tính....và các chuyên ngành liên quan khác.
- Bắt buộc có tối thiểu 4 năm ở vị trí BA lĩnh vực Ecommerce/Fintech/ERP
- Có hiểu biết về phân tích, thiết kế.
- Có kỹ năng giao tiếp, làm việc nhóm.
- Có khả năng lập kế hoạch, kiểm soát chất lượng hệ thống.
- Chủ động, có thái độ tích cực và trách nhiệm cao trong công việc.
- Có chứng chỉ quốc tế về Business Analysis là một lợi thế.
`,benefits: `THU NHẬP
- Mức lương: lên tới 40M
- Gói thu nhập 14-16 tháng lương/ năm
- Xét tăng lương theo năng lực và kết quả công việc định kỳ 1 lần/ năm hoặc tăng lương đột xuất theo hiệu quả công việc
BẢO HIỂM VÀ CHÍNH SÁCH PHÚC LỢI
- Chế độ Bảo hiểm sức khỏe cho bản thân và người nhà
- Nghỉ thứ Bảy, Chủ nhật hàng tuần
- Du lịch, Teambuilding/ dã ngoại định kỳ hàng năm
- Chế độ mừng sinh con, quà nhân ngày Lễ/ Tết, quà ngày truyền thống và các chế độ phúc lợi khác
CHẾ ĐỘ ĐÀO TẠO
- Tham gia các khóa đào tạo chuyên môn, nâng cao kỹ năng thực hiện công việc, kỹ năng mềm và thi các chứng chỉ CNTT Quốc tế miễn phí tại Công ty
- Được tham gia các chương trình đào tạo trước khi bắt đầu công việc và trong quá trình làm việc theo yêu cầu công việc
- Chính sách phát triển, thăng tiến có lộ trình theo từng vị trí, từng phòng ban
MÔI TRƯỜNG LÀM VIỆC
- Tham gia các Câu lạc bộ của Công ty: CLB bóng đá, chạy bộ, yoga, gym...
- Được trang bị laptop, các thiết bị công nghệ hiện đại trong quá trình làm việc
- Môi trường làm việc hiện đại, năng động, khuyến khích tối đa sự sáng tạo của nhân viên
`,time:"Thứ 2 - Thứ 6 (từ 08:00 đến 17:30)", location:"- Hà Nội: Cầu Giấy", contact:"jobs@artstudio.com",src:"fss.png"},
  {id:14, title:"DEVOPS ENGINEERING", category:"it", company:"Eko Tech", description:`Phối hợp chặt chẽ với Developer, QA và các bộ phận liên quan để đảm bảo hệ thống được triển khai và vận hành ổn định, an toàn, hiệu quả.
Xây dựng & quản trị hạ tầng Cloud Native:
-	Đề xuất và triển khai giải pháp tối ưu hiệu năng, chi phí và bảo mật cho hạ tầng.
Tự động hóa & IaC (Infrastructure as Code):
-	Áp dụng Terraform, Ansible để quản lý và tự động hóa toàn bộ vòng đời hạ tầng.
-	Thiết kế, xây dựng và tối ưu hóa CI/CD pipeline với GitLab CI, Jenkins, ArgoCD, Helm, Helmfile, CircleCI...
Giám sát & đảm bảo độ tin cậy (SRE):
-	Phát triển hệ thống giám sát, logging, tracing tập trung (Prometheus, Grafana, Loki, ELK Stack) để đảm bảo observability toàn diện.
-	Thiết kế và triển khai các giải pháp High Availability (HA), Disaster Recovery (DR), đáp ứng SLA khắt khe.
Xử lý sự cố & cải tiến liên tục:
-	Phân tích, xử lý và phối hợp khắc phục sự cố hạ tầng.
-	Chia sẻ kiến thức, hỗ trợ team và đề xuất áp dụng công nghệ mới để nâng cao độ ổn định & hiệu suất.
`,benefits: `-	Thu nhập hấp dẫn thỏa thuận theo năng lực
-	Xét tăng lương theo năng lực và kết quả công việc: 6 tháng/1 lần.
-	Quà tặng nhân viên các dịp lễ, Tết, sinh nhật, và các ngày lễ khác.
-	Được tư vấn về career path và có lộ trình thăng tiến, phát triển và cơ hội làm việc với tập đoàn hàng đầu về viễn thông.
-	Môi trường làm việc trẻ trung, thoải mái, thân thiện, được hỗ trợ tối đa trong công việc.
-	Khám sức khỏe định kỳ hàng năm. Đóng BHXH, BHYT theo quy định.
-	Hỗ trợ full option 100% nếu đi công tác nước ngoài (Khu vực ĐNA - EU - Japan - Singapore) (chi phí đi lại, công tác ..v.v.)`, requirements:`-	Tốt nghiệp đại học/cao đẳng chuyên ngành CNTT, Toán tin, Điện tử viễn thông…
-	Kiến thức nền tảng tốt về logic code, hiểu tiến trình code.
-	Ưu tiên ứng viên có kinh nghiệm thực tế DevOps/DevSecOps trong công ty công nghệ hoặc IT tổ chức tài chính.
-	Tối thiểu 2 năm kinh nghiệm ở vị trí DevOps , System Engineer
-	Hiểu biết tốt về quy trình phát triển và vận hành phần mềm.
-	Nắm vững CI/CD tối ưu hoá pipeline và tự động hóa quá trình build/deploy.
-	Thành thạo trong việc triển khai và quản trị quy trình DevOps với các công cụ: Jenkins, Rancher, Kubernetes (K8s), Docker.
-	Có kinh nghiệm triển khai, vận hành và tối ưu hệ thống cơ sở dữ liệu Oracle, MongoDB, MariaDB, Redis, cluster HA cũng như hệ thống Kafka và hệ thống phân tán.
-	Hứng thú với việc giải quyết các thách thức kỹ thuật và luôn sẵn sàng học hỏi công nghệ mới.
-	Kỹ năng giải quyết vấn đề tốt, có tinh thần làm việc nhóm.
-	Kỹ năng giao tiếp tốt để phối hợp hiệu quả với các lập trình viên và các bên liên quan.
-	Có khả năng đọc hiểu tài liệu kỹ thuật và giao tiếp Tiếng Anh cơ bản (ưu tiên).
`,time:"Thứ 2 - Thứ 6 (từ 08:00 đến 17:30)", location:"Cầu Giấy, Hà Nội", contact:"jobs@artstudio.com",src:"eko.png"},

];

// Hiển thị danh sách việc làm hot
function renderJobList() {
  const container = document.getElementById("jobList");
  if (!container) return;
  container.innerHTML = jobs.slice(0,5).map(job => `
    <div class="job-card">
      <h3><a href="job-detail.html?id=${job.id}">${job.title}</a></h3>
      <p><strong>Công ty:</strong> ${job.company}</p>
    </div>
  `).join("");
}

// Hiển thị tất cả jobs (jobs.html)
function renderJobsPage() {
  const container = document.getElementById("jobsPageList");
  if (!container) return;
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  let filtered = jobs;
  if (category) filtered = jobs.filter(j => j.category === category);
  container.innerHTML = filtered.map(job => `
    <div class="job-card">
      <img class="logoc" src=${job.src}>
      <h3><a href="job-detail.html?id=${job.id}">${job.title}</a></h3>
      <p><strong>Công ty:</strong> ${job.company}</p>
    </div>
  `).join("");
}

// Hiển thị chi tiết job
// function renderJobDetail() {
//   const container = document.getElementById("jobDetail");
//   if (!container) return;
//   const urlParams = new URLSearchParams(window.location.search);
//   const id = parseInt(urlParams.get("id"));
//   const job = jobs.find(j => j.id === id);
//   if (job) {
//     container.innerHTML = `
//       <h2>${job.title}</h2>
//       <p><strong>Công ty:</strong> ${job.company}</p>
//       <p><strong>Mô tả:</strong> ${job.description}</p>
//       <p><strong>Yêu cầu:</strong> ${job.requirements}</p>
//       <p><strong>Liên hệ:</strong> ${job.contact}</p>
//     `;
//   }
// }
function renderJobDetail() {
  const container = document.getElementById("jobDetail");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id"));
  const job = jobs.find(j => j.id === id);

  if (job) {
    // Hàm phụ để xử lý text  <ul><li> hoặc <p>
    function renderList(text) {
      if (text && text.includes("-")) {
        return (
          "<ul>" +
          text
            .split("\n")
            .map(line => line.trim())
            .filter(line => line)
            .map(line => `<li>${line.replace(/^-+/, "").trim()}</li>`)
            .join("") +
          "</ul>"
        );
      } else if (text) {
        return `<p>${text}</p>`;
      }
      return "<p>Chưa cập nhật</p>";
    }

    // Tạo HTML cho từng phần
    const descriptionHTML = renderList(job.description);
    const requirementsHTML = renderList(job.requirements);
    const benefitsHTML = renderList(job.benefits);
    const locationHTML = renderList(job.location);
    const timeHTML = renderList(job.time);

    // Get company logo if available
    const companyLogo = job.src ? `<img src="${job.src}" alt="${job.company} Logo">` : '<div class="company-initial">' + job.company.charAt(0) + '</div>';

    container.innerHTML = `
      <div class="breadcrumb">
        <a href="index.html">Trang chủ</a>
        <span>></span>
        <a href="jobs.html">Việc làm</a>
        <span>></span>
        <span>Chi tiết việc làm</span>
      </div>

      <div class="job-detail-header">
        <div class="job-detail-header-content">
          <div class="job-company-logo">
            ${companyLogo}
          </div>
          <div class="job-title-section">
            <h1>${job.title}</h1>
            <p class="job-company-name">${job.company}</p>
            <div class="job-meta-info">
              <div class="job-meta-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${job.location ? job.location.split('\n')[0].trim() : 'Chưa cập nhật'}</span>
              </div>
              <div class="job-meta-item">
                <i class="fas fa-clock"></i>
                <span>${job.time ? job.time.split('\n')[0].trim() : 'Chưa cập nhật'}</span>
              </div>
              <div class="job-meta-item">
                <i class="fas fa-envelope"></i>
                <span>${job.contact}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="job-detail-content">
        <div class="job-main-content">
          <div class="job-section">
            <h2>📋 Mô tả công việc</h2>
            ${descriptionHTML}
          </div>

          <div class="job-section">
            <h2>🎯 Yêu cầu ứng viên</h2>
            ${requirementsHTML}
          </div>

          <div class="job-section">
            <h2>🎁 Quyền lợi</h2>
            ${benefitsHTML}
          </div>
        </div>

        <div class="job-sidebar">
          <div class="job-actions-card">
            <h3>🚀 Ứng tuyển ngay</h3>
            <button class="btn-apply" onclick="applyForJob(${job.id})">
              <i class="fas fa-paper-plane"></i> Ứng tuyển ngay
            </button>
            <button class="btn-secondary" onclick="saveJob(${job.id})">
              <i class="fas fa-bookmark"></i> Lưu việc làm
            </button>
            <button class="btn-secondary" onclick="shareJob(${job.id})">
              <i class="fas fa-share-alt"></i> Chia sẻ
            </button>
          </div>

          <div class="job-info-card">
            <h3><i class="fas fa-info-circle"></i> Thông tin việc làm</h3>
            <div class="job-info-item">
              <i class="fas fa-building"></i>
              <span><strong>Công ty:</strong> ${job.company}</span>
            </div>
            <div class="job-info-item">
              <i class="fas fa-map-marker-alt"></i>
              <span><strong>Địa điểm:</strong> ${job.location ? job.location.split('\n')[0].trim() : 'Chưa cập nhật'}</span>
            </div>
            <div class="job-info-item">
              <i class="fas fa-clock"></i>
              <span><strong>Thời gian:</strong> ${job.time ? job.time.split('\n')[0].trim() : 'Chưa cập nhật'}</span>
            </div>
            <div class="job-info-item">
              <i class="fas fa-envelope"></i>
              <span><strong>Liên hệ:</strong> ${job.contact}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="job-not-found">
        <h2>Không tìm thấy việc làm</h2>
        <p>Việc làm bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
        <a href="jobs.html" class="btn-back">← Quay lại danh sách việc làm</a>
      </div>
    `;
  }
}

// Job action functions
function applyForJob(jobId) {
  const job = jobs.find(j => j.id === jobId);
  if (job) {
    alert(`Bạn đã ứng tuyển thành công cho vị trí "${job.title}" tại ${job.company}!\n\nChúng tôi sẽ liên hệ với bạn qua email: ${job.contact}`);
  }
}

function saveJob(jobId) {
  const job = jobs.find(j => j.id === jobId);
  if (job) {
    alert(`Đã lưu việc làm "${job.title}" vào danh sách yêu thích!`);
  }
}

function shareJob(jobId) {
  const job = jobs.find(j => j.id === jobId);
  if (job) {
    const shareUrl = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: job.title,
        text: `Việc làm ${job.title} tại ${job.company}`,
        url: shareUrl
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert('Đã sao chép link chia sẻ vào clipboard!');
      });
    }
  }
}

// Blog data array 
const blogPosts = [
  {
    id: 1,
    title: "7 kinh nghiệm hữu ích khi làm việc với GIT trong dự án",
    excerpt: "Git là một công cụ không thể thiếu trong việc quản lý mã nguồn cho các dự án phát triển phần mềm. Tuy nhiên, không phải ai cũng biết cách sử dụng Git một cách hiệu quả...",
    content: "1. Sử dụng commit message có ý nghĩa\n\nViết commit message rõ ràng, mô tả chính xác những thay đổi bạn đã thực hiện. Điều này giúp team dễ dàng theo dõi lịch sử thay đổi.\n\n2. Tạo branch cho từng tính năng\n\nLuôn tạo branch riêng cho mỗi tính năng hoặc bug fix. Điều này giúp code được tổ chức tốt hơn và giảm thiểu conflict.\n\n3. Thường xuyên pull từ main branch\n\nĐể tránh conflict lớn, hãy thường xuyên pull code từ main branch về branch hiện tại của bạn.\n\n4. Sử dụng .gitignore hiệu quả\n\nLuôn cấu hình .gitignore để loại trừ những file không cần thiết như node_modules, .env, build files...\n\n5. Review code trước khi merge\n\nSử dụng Pull Request để review code trước khi merge vào main branch. Điều này giúp đảm bảo chất lượng code.\n\n6. Backup và remote repository\n\nLuôn push code lên remote repository để backup và chia sẻ với team members.\n\n7. Học các lệnh Git cơ bản\n\nNắm vững các lệnh như git add, git commit, git push, git pull, git branch, git merge để làm việc hiệu quả.",
    author: "Sơn Dương",
    authorBio: "Senior Software Engineer với 8 năm kinh nghiệm trong phát triển web",
    date: "15/01/2024",
    readTime: "5 phút đọc",
    category: "Git",
    tags: ["Git", "Version Control", "Development", "Best Practices"],
    image: "git.png",
    views: 1250,
    likes: 89,
    isFeatured: true
  },
  {
    id: 2,
    title: "Bài tập Python từ cơ bản đến nâng cao (có lời giải)",
    excerpt: "Python là một ngôn ngữ lập trình bậc cao, mã nguồn mở được sử dụng rộng rãi trong nhiều lĩnh vực khác nhau từ phát triển web, khoa học dữ liệu đến trí tuệ nhân tạo...",
    content: "Bài tập cơ bản\n\nBài 1: In Hello World\nprint('Hello, World!')\n\nBài 2: Tính tổng hai số\na = int(input('Nhập số thứ nhất: '))\nb = int(input('Nhập số thứ hai: '))\nprint(f'Tổng: {a + b}')\n\nBài tập trung bình\n\nBài 3: Kiểm tra số nguyên tố\ndef is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\nnumber = int(input('Nhập số: '))\nif is_prime(number):\n    print(f'{number} là số nguyên tố')\nelse:\n    print(f'{number} không là số nguyên tố')\n\nBài tập nâng cao\n\nBài 4: Thuật toán sắp xếp Quick Sort\ndef quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + middle + quicksort(right)\n\n# Test\narr = [3, 6, 8, 10, 1, 2, 1]\nprint(quicksort(arr))",
    author: "Minh Hoàng",
    authorBio: "Python Developer và Data Scientist tại FPT Software",
    date: "12/01/2024", 
    readTime: "15 phút đọc",
    category: "Python",
    tags: ["Python", "Programming", "Tutorial", "Exercises"],
    image: "py.jpg",
    views: 980,
    likes: 156,
    isFeatured: true
  },
  {
    id: 3,
    title: "Những thực phẩm lập trình viên nên và không nên ăn",
    excerpt: "Chế độ dinh dưỡng đóng vai trò quan trọng đối với sức khỏe và hiệu suất làm việc của lập trình viên. Khi phải ngồi làm việc nhiều giờ liền trước máy tính...",
    content: "Thực phẩm nên ăn\n\n1. Các loại hạt và quả khô\nHạnh nhân, óc chó, hạt điều chứa omega-3 tốt cho não bộ và giúp tăng cường trí nhớ.\n\n2. Cá hồi và các loại cá béo\nGiàu DHA và EPA, giúp cải thiện chức năng não và giảm căng thẳng.\n\n3. Quả việt quất (blueberry)\nChứa nhiều chất chống oxi hóa, giúp bảo vệ não khỏi tổn thương do gốc tự do.\n\n4. Trà xanh\nChứa L-theanine giúp tăng cường sự tập trung mà không gây căng thẳng như caffeine.\n\nThực phẩm nên hạn chế\n\n1. Đồ ăn nhanh và thức ăn chế biến sẵn\nChứa nhiều chất bảo quản và sodium, có thể gây mệt mỏi và giảm sự tập trung.\n\n2. Đồ uống có đường\nGây tăng đường huyết đột ngột rồi giảm mạnh, làm giảm hiệu suất làm việc.\n\n3. Quá nhiều caffeine\nCó thể gây lo âu, mất ngủ và giảm khả năng tập trung lâu dài.\n\nMẹo ăn uống cho lập trình viên\n- Ăn nhiều bữa nhỏ thay vì ít bữa lớn\n- Uống đủ nước (ít nhất 2 lít/ngày)\n- Chuẩn bị đồ ăn nhẹ lành mạnh\n- Tránh ăn khi đang code để tránh rối loạn tiêu hóa",
    author: "Thu Hương",
    authorBio: "Chuyên gia dinh dưỡng và blogger về sức khỏe công nghệ",
    date: "10/01/2024",
    readTime: "8 phút đọc",
    category: "Lifestyle", 
    tags: ["Health", "Nutrition", "Productivity", "Developer Life"],
    image: "food.jpg",
    views: 750,
    likes: 92,
    isFeatured: false
  },
  {
    id: 4,
    title: "React Hooks: Hướng dẫn chi tiết từ A-Z cho người mới bắt đầu",
    excerpt: "React Hooks được giới thiệu từ phiên bản 16.8, mang đến cách tiếp cận mới trong việc quản lý state và lifecycle methods. Bài viết này sẽ hướng dẫn bạn từ cơ bản đến nâng cao...",
    content: "Giới thiệu về React Hooks\n\nReact Hooks là các hàm cho phép bạn sử dụng state và các tính năng khác của React mà không cần viết class component.\n\n1. useState Hook\n\nHook cơ bản nhất để quản lý state trong functional component:\n\nimport React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Bạn đã click {count} lần</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n\n2. useEffect Hook\n\nThay thế cho componentDidMount, componentDidUpdate và componentWillUnmount:\n\nimport React, { useState, useEffect } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `Bạn đã click ${count} lần`;\n    \n    // Cleanup function\n    return () => {\n      console.log('Component will unmount');\n    };\n  }, [count]); // Dependency array\n\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>\n        Click {count}\n      </button>\n    </div>\n  );\n}\n\n3. useContext Hook\n\nGiúp truy cập Context một cách dễ dàng:\n\nimport React, { useContext } from 'react';\n\nconst ThemeContext = React.createContext();\n\nfunction Button() {\n  const theme = useContext(ThemeContext);\n  return (\n    <button style={{ background: theme.background }}>\n      Themed Button\n    </button>\n  );\n}\n\n4. Custom Hooks\n\nTạo hooks tùy chỉnh để tái sử dụng logic:\n\nfunction useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n\n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', handleResize);\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n\n  return width;\n}",
    author: "Quang Minh",
    authorBio: "Frontend Developer chuyên về React và Vue.js",
    date: "08/01/2024",
    readTime: "12 phút đọc",
    category: "React",
    tags: ["React", "Hooks", "JavaScript", "Frontend"],
    image: "react.png",
    views: 1420,
    likes: 203,
    isFeatured: false
  },
  {
    id: 5,
    title: "Docker và Kubernetes: Hành trình từ Container đến Orchestration", 
    excerpt: "Trong thời đại DevOps hiện tại, Docker và Kubernetes đã trở thành những công nghệ không thể thiếu. Bài viết này sẽ giúp bạn hiểu rõ về containerization...",
    content: "Giới thiệu về Docker\n\nDocker là nền tảng containerization giúp đóng gói ứng dụng cùng với dependencies thành các container nhẹ và portable.\n\nTại sao cần Docker?\n\n- Consistency: 'It works on my machine' syndrome\n- Portability: Chạy được trên mọi môi trường\n- Efficiency: Sử dụng tài nguyên hiệu quả hơn VM\n- Scalability: Dễ dàng scale up/down\n\nDocker cơ bản\n\n1. Tạo Dockerfile\n\nFROM node:16-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ['npm', 'start']\n\n2. Build và chạy container\n\n# Build image\ndocker build -t my-app .\n\n# Chạy container\ndocker run -p 3000:3000 my-app\n\nGiới thiệu về Kubernetes\n\nKubernetes (K8s) là hệ thống orchestration mã nguồn mở để tự động hóa việc deploy, scale và quản lý các container.\n\nCác thành phần chính của K8s\n\n1. Pod\n\nĐơn vị nhỏ nhất có thể deploy trong K8s, chứa một hoặc nhiều container.\n\n2. Deployment\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: my-app\n  template:\n    metadata:\n      labels:\n        app: my-app\n    spec:\n      containers:\n      - name: my-app\n        image: my-app:latest\n        ports:\n        - containerPort: 3000\n\n3. Service\n\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-app-service\nspec:\n  selector:\n    app: my-app\n  ports:\n  - port: 80\n    targetPort: 3000\n  type: LoadBalancer\n\nBest Practices\n\n- Sử dụng multi-stage builds để giảm kích thước image\n- Không chạy container với root user\n- Sử dụng health checks\n- Quản lý secrets và configs an toàn\n- Monitor và logging",
    author: "Văn Đức",
    authorBio: "DevOps Engineer với 6 năm kinh nghiệm triển khai hệ thống cloud native",
    date: "05/01/2024",
    readTime: "18 phút đọc",
    category: "DevOps",
    tags: ["Docker", "Kubernetes", "DevOps", "Containerization", "Cloud"],
    image: "D&K.png",
    views: 890,
    likes: 134,
    isFeatured: false
  },
  {
  id: 6,
  title: "Top 10 mẹo tối ưu hiệu suất ReactJS cho dự án lớn",
  excerpt: "ReactJS là thư viện phổ biến để xây dựng giao diện người dùng. Tuy nhiên, khi dự án ngày càng lớn, hiệu suất có thể bị ảnh hưởng nếu không được tối ưu...",
  content: "1. Sử dụng React.memo\n\nBọc các component bằng React.memo để tránh render không cần thiết.\n\n2. Tối ưu danh sách với key\n\nLuôn đặt key duy nhất khi render list để React có thể quản lý tốt hơn.\n\n3. Lazy loading\n\nChỉ tải component khi cần bằng React.lazy và Suspense.\n\n4. Code splitting\n\nTách code thành nhiều bundle nhỏ để tải nhanh hơn.\n\n5. Tránh inline function trong JSX\n\nKhai báo hàm ngoài render để tránh tạo mới liên tục.\n\n6. Dùng virtualization cho list lớn\n\nThư viện như react-window, react-virtualized giúp hiển thị danh sách lớn mượt hơn.\n\n7. Tránh prop drilling\n\nSử dụng Context API hoặc Redux để quản lý state.\n\n8. Batch update\n\nReact 18 hỗ trợ batching nhiều state update, giúp giảm render.\n\n9. Dùng useCallback và useMemo hợp lý\n\nChỉ dùng khi thật sự cần để giảm tính toán dư thừa.\n\n10. Kiểm tra performance bằng React DevTools\n\nLuôn kiểm tra để tìm ra bottleneck.",
  author: "Minh Trí",
  authorBio: "Frontend Developer, chuyên ReactJS và TypeScript",
  date: "20/01/2024",
  readTime: "7 phút đọc",
  category: "ReactJS",
  tags: ["ReactJS", "Frontend", "Performance", "Web Development"],
  image: "react.png",
  views: 980,
  likes: 72,
  isFeatured: false
},
{
  id: 7,
  title: "5 xu hướng trí tuệ nhân tạo (AI) nổi bật năm 2024",
  excerpt: "AI tiếp tục phát triển mạnh mẽ và ảnh hưởng đến nhiều lĩnh vực trong năm 2024. Dưới đây là 5 xu hướng đáng chú ý bạn không nên bỏ lỡ...",
  content: "1. Generative AI\n\nAI tạo nội dung văn bản, hình ảnh, âm nhạc ngày càng phổ biến.\n\n2. AI trong y tế\n\nỨng dụng AI để chẩn đoán, dự đoán bệnh sớm và hỗ trợ điều trị.\n\n3. AI trong giáo dục\n\nTạo trải nghiệm học tập cá nhân hóa, hỗ trợ giảng dạy.\n\n4. AI kết hợp IoT\n\nThiết bị IoT tích hợp AI giúp tự động hóa thông minh hơn.\n\n5. Đạo đức và quy định về AI\n\nNhiều quốc gia bắt đầu đưa ra khung pháp lý quản lý AI.",
  author: "Lan Anh",
  authorBio: "Data Scientist với 5 năm kinh nghiệm về AI và Machine Learning",
  date: "25/01/2024",
  readTime: "6 phút đọc",
  category: "AI",
  tags: ["AI", "Machine Learning", "Technology", "Trends"],
  image: "ai.jpg",
  views: 2150,
  likes: 134,
  isFeatured: true
},
{
  id: 8,
  title: "Docker cơ bản: Hướng dẫn cho lập trình viên mới bắt đầu",
  excerpt: "Docker giúp đơn giản hóa việc triển khai và chạy ứng dụng. Nếu bạn là người mới, bài viết này sẽ hướng dẫn những kiến thức cơ bản...",
  content: "1. Docker là gì?\n\nDocker là nền tảng container hóa giúp chạy ứng dụng độc lập môi trường.\n\n2. Image và Container\n\nImage là mẫu đóng gói, Container là thực thể đang chạy.\n\n3. Dockerfile\n\nSử dụng Dockerfile để định nghĩa cách build image.\n\n4. Docker Compose\n\nQuản lý nhiều container dễ dàng với docker-compose.yml.\n\n5. Ưu điểm của Docker\n\nTính nhất quán, dễ triển khai, tiết kiệm tài nguyên và hỗ trợ CI/CD.",
  author: "Hữu Tài",
  authorBio: "DevOps Engineer với hơn 6 năm kinh nghiệm triển khai hệ thống",
  date: "28/01/2024",
  readTime: "5 phút đọc",
  category: "DevOps",
  tags: ["Docker", "DevOps", "Deployment", "Container"],
  image: "docker.png",
  views: 1670,
  likes: 96,
  isFeatured: false
},
{
  id: 9,
  title: "Kubernetes: 7 khái niệm cốt lõi bạn cần biết",
  excerpt: "Kubernetes là công cụ mạnh mẽ để quản lý container. Tuy nhiên, trước khi đi sâu, bạn cần nắm rõ 7 khái niệm cơ bản sau...",
  content: "1. Pod\n\nĐơn vị nhỏ nhất chứa container.\n\n2. Node\n\nMáy chủ vật lý hoặc ảo chạy Pod.\n\n3. Cluster\n\nTập hợp nhiều Node do Kubernetes quản lý.\n\n4. Deployment\n\nĐịnh nghĩa cách triển khai Pod và quản lý số lượng.\n\n5. Service\n\nCho phép các Pod giao tiếp với nhau và với bên ngoài.\n\n6. Namespace\n\nGiúp tổ chức và phân tách tài nguyên.\n\n7. ConfigMap & Secret\n\nQuản lý cấu hình và dữ liệu nhạy cảm.",
  author: "Ngọc Hà",
  authorBio: "Cloud Engineer chuyên về Kubernetes và Microservices",
  date: "01/02/2024",
  readTime: "8 phút đọc",
  category: "Kubernetes",
  tags: ["Kubernetes", "DevOps", "Cloud", "Container"],
  image: "kub.png",
  views: 1890,
  likes: 112,
  isFeatured: true
},
{
  id: 10,
  title: "Clean Code: 6 nguyên tắc viết mã sạch dễ bảo trì",
  excerpt: "Clean Code giúp code dễ đọc, dễ bảo trì và giảm bug. Dưới đây là 6 nguyên tắc cơ bản mà lập trình viên nào cũng nên áp dụng...",
  content: "1. Đặt tên rõ ràng\n\nTên biến, hàm, class phải thể hiện đúng mục đích.\n\n2. Hàm ngắn gọn\n\nMỗi hàm chỉ nên làm một việc duy nhất.\n\n3. Tránh lặp code\n\nLuôn refactor để tái sử dụng code.\n\n4. Comment hợp lý\n\nComment để giải thích lý do, không lặp lại code.\n\n5. Format code thống nhất\n\nSử dụng linter và formatter để đồng bộ style.\n\n6. Viết test\n\nUnit test và integration test giúp đảm bảo code an toàn khi thay đổi.",
  author: "Quốc Bảo",
  authorBio: "Backend Developer, tác giả nhiều bài viết về Clean Code",
  date: "05/02/2024",
  readTime: "6 phút đọc",
  category: "Best Practices",
  tags: ["Clean Code", "Best Practices", "Software Engineering"],
  image: "clean.jpg",
  views: 1420,
  likes: 87,
  isFeatured: false
}
];

// Render blog list page
function renderBlogList() {
  const container = document.getElementById("blogGrid");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const categoryFilter = urlParams.get("category");
  
  let filteredPosts = blogPosts;
  if (categoryFilter) {
    filteredPosts = blogPosts.filter(post => post.category === categoryFilter);
  }

  container.innerHTML = filteredPosts.map(post => `
    <div class="blog-grid-item">
      <img src="${post.image}" alt="${post.title}">
      <div class="blog-grid-content">
        <div class="blog-grid-meta">
          <span>📅 ${post.date}</span>
          <span>👤 ${post.author}</span>
          <span>⏱️ ${post.readTime}</span>
        </div>
        <span class="blog-category-tag">${post.category}</span>
        <h3><a href="blog-detail.html?id=${post.id}">${post.title}</a></h3>
        <p>${post.excerpt}</p>
        <div class="blog-grid-stats">
          <span>👀 ${post.views} lượt xem</span>
          <span>❤️ ${post.likes} lượt thích</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Filter blogs by category
function filterBlogsByCategory() {
  const categoryFilter = document.getElementById('categoryFilter');
  if (!categoryFilter) return;

  categoryFilter.addEventListener('change', (e) => {
    const selectedCategory = e.target.value;
    const container = document.getElementById("blogGrid");
    if (!container) return;

    let filteredPosts = blogPosts;
    if (selectedCategory) {
      filteredPosts = blogPosts.filter(post => post.category === selectedCategory);
    }

    container.innerHTML = filteredPosts.map(post => `
      <div class="blog-grid-item">
        <img src="${post.image}" alt="${post.title}">
        <div class="blog-grid-content">
          <div class="blog-grid-meta">
            <span>📅 ${post.date}</span>
            <span>👤 ${post.author}</span>
            <span>⏱️ ${post.readTime}</span>
          </div>
          <span class="blog-category-tag">${post.category}</span>
          <h3><a href="blog-detail.html?id=${post.id}">${post.title}</a></h3>
          <p>${post.excerpt}</p>
          <div class="blog-grid-stats">
            <span>👀 ${post.views} lượt xem</span>
            <span>❤️ ${post.likes} lượt thích</span>
          </div>
        </div>
      </div>
    `).join('');
  });
}

// Helper function để format content thành HTML
function formatBlogContent(content) {
  return content
    .split('\n\n')
    .map(paragraph => {
      if (paragraph.trim() === '') return '';
      
      // Check if it's a title (doesn't start with number, -, or code)
      if (!paragraph.match(/^[\d\-]/) && !paragraph.includes('import') && !paragraph.includes('function') && paragraph.length < 100) {
        return `<h3>${paragraph.trim()}</h3>`;
      }
      
      // Check if it's code block
      if (paragraph.includes('import') || paragraph.includes('function') || paragraph.includes('def ') || paragraph.includes('FROM ') || paragraph.includes('apiVersion:')) {
        return `<pre><code>${paragraph.trim()}</code></pre>`;
      }
      
      // Check if it's a list item
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(item => item.trim());
        return `<ul>${items.map(item => `<li>${item.replace(/^-\s*/, '').trim()}</li>`).join('')}</ul>`;
      }
      
      // Regular paragraph
      return `<p>${paragraph.trim()}</p>`;
    })
    .join('');
}

// Generate blog content
function renderBlogContent() {
  const blogContainer = document.querySelector('.blog-content');
  if (!blogContainer) return;

  const featuredPost = blogPosts.find(post => post.isFeatured);
  const sidebarPosts = blogPosts.filter(post => !post.isFeatured).slice(0, 3);

  const blogHTML = `
    <div class="blog-main">
      <div class="main-article">
        <img src="${featuredPost.image}" alt="${featuredPost.title}">
        <div class="main-article-content">
          <div class="article-meta">
            <span>📅 ${featuredPost.date}</span>
            <span>👤 ${featuredPost.author}</span>
            <span>🏷️ ${featuredPost.category}</span>
            <span>⏱️ ${featuredPost.readTime}</span>
          </div>
          <h3>${featuredPost.title}</h3>
          <p>${featuredPost.excerpt}</p>
          <a href="blog-detail.html?id=${featuredPost.id}" class="read-more">Đọc thêm →</a>
        </div>
      </div>
    </div>
    <div class="blog-sidebar">
      ${sidebarPosts.map(post => `
        <div class="blog-item">
          <img src="${post.image}" alt="${post.title}">
          <div class="blog-item-content">
            <div class="item-meta">${post.date} • ${post.author}</div>
            <h4>${post.title}</h4>
            <p>${post.excerpt}</p>
            <a href="blog-detail.html?id=${post.id}" class="read-more">Đọc thêm →</a>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  blogContainer.innerHTML = blogHTML;
}

// Render blog detail - Ultra Simple
function renderBlogDetail() {
  const container = document.getElementById("blogDetail");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id"));
  const blog = blogPosts.find(b => b.id === id);

  if (blog) {
    const formattedContent = formatBlogContent(blog.content);
    
    container.innerHTML = `
      <article class="blog-detail-content">
 
        
        <img src="${blog.image}"  class="blog-featured-image">
        <h1>${blog.title}</h1>
        
        <div class="blog-content-body">
          ${formattedContent}
        </div>
        
        <footer class="blog-detail-footer">
          <div class="blog-tags">
            ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          
          <div class="blog-actions">
            <button class="btn-like">❤️ Thích (${blog.likes})</button>
            <button class="btn-share">📤 Chia sẻ</button>
          </div>
          
          <div class="back-to-blog">
            <a href="index.html#blog" class="btn-back">← Quay lại Blog</a>
          </div>
        </footer>
      </article>
    `;
  } else {
    container.innerHTML = `
      <div class="blog-not-found">
        <h2>Không tìm thấy bài viết</h2>
        <p>Bài viết bạn tìm kiếm không tồn tại.</p>
        <a href="index.html#blog" class="btn-back">← Quay lại Blog</a>
      </div>
    `;
  }
}





// Slideshow
let slideIndex = 0;
function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((s,i)=> s.classList.remove("active"));
  slideIndex = (slideIndex+1) % slides.length;
  slides[slideIndex].classList.add("active");
}
setInterval(showSlides,2000);

// Recruiters carousel functionality
let recruiterSlideIndex = 0;
function showRecruiterSlides() {
  const slides = document.querySelectorAll(".recruiter-slide");
  if (slides.length === 0) return;
  
  slides.forEach(slide => slide.classList.remove("active"));
  recruiterSlideIndex = (recruiterSlideIndex + 1) % slides.length;
  slides[recruiterSlideIndex].classList.add("active");
}

// Auto-rotate recruiters carousel every 4 seconds
setInterval(showRecruiterSlides, 4000);

document.addEventListener("DOMContentLoaded", () => {
  renderJobList();
  renderJobsPage();
  renderJobDetail();
  renderBlogContent();
  renderBlogDetail();
  renderBlogList();
  filterBlogsByCategory();
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", ()=>{
      const slides = document.querySelectorAll(".slide");
      slides.forEach((s,i)=> s.classList.remove("active"));
      slideIndex = (slideIndex-1+slides.length) % slides.length;
      slides[slideIndex].classList.add("active");
    });
    nextBtn.addEventListener("click", showSlides);
  }

  // Recruiters carousel controls
  // const prevRecruiterBtn = document.querySelector(".recruiters-carousel .prev-btn");
  // const nextRecruiterBtn = document.querySelector(".recruiters-carousel .next-btn");
  
  // if (prevRecruiterBtn && nextRecruiterBtn) {
  //   prevRecruiterBtn.addEventListener("click", () => {
  //     const slides = document.querySelectorAll(".recruiter-slide");
  //     if (slides.length === 0) return;
      
  //     slides.forEach(slide => slide.classList.remove("active"));
  //     recruiterSlideIndex = (recruiterSlideIndex - 1 + slides.length) % slides.length;
  //     slides[recruiterSlideIndex].classList.add("active");
  //   });
    
  //   nextRecruiterBtn.addEventListener("click", () => {
  //     showRecruiterSlides();
  //   });
  // }

  const dropdown = document.querySelector('.dropdown');
  if (dropdown) {
    const dropdownLink = dropdown.querySelector('a');
    
    dropdownLink.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
    
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      dropdownMenu.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
  }
});

const chatToggle = document.querySelector('.chat-toggle');
  const chatWindow = document.getElementById('chatWindow');
  const chatClose = document.querySelector('.chat-close');
  const chatForm = document.getElementById('chatForm');
  const chatText = document.getElementById('chatText');
  const chatMessages = document.getElementById('chatMessages');

  function openChat() {
    if (!chatWindow) return;
    chatWindow.hidden = false;
    if (chatToggle) chatToggle.setAttribute('aria-expanded', 'true');
    chatText && chatText.focus();
  }

  function closeChat() {
    if (!chatWindow) return;
    chatWindow.hidden = true;
    if (chatToggle) chatToggle.setAttribute('aria-expanded', 'false');
  }

  function toggleChat() {
    if (!chatWindow) return;
    const isHidden = chatWindow.hasAttribute('hidden');
    if (isHidden) openChat(); else closeChat();
  }

  chatToggle && chatToggle.addEventListener('click', toggleChat);
  chatClose && chatClose.addEventListener('click', closeChat);

  chatForm && chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = (chatText && chatText.value || '').trim();
    if (!text) return;
    
    const li = document.createElement('div');
    li.className = 'msg user';
    li.textContent = text;
    chatMessages && chatMessages.appendChild(li);
    if (chatText) chatText.value = '';

    setTimeout(() => {
      const reply = document.createElement('div');
      reply.className = 'msg bot';
      reply.textContent = 'Cảm ơn bạn! Chúng tôi sẽ phản hồi sớm.';
      chatMessages && chatMessages.appendChild(reply);
      chatMessages && (chatMessages.scrollTop = chatMessages.scrollHeight);
    }, 500);
    chatMessages && (chatMessages.scrollTop = chatMessages.scrollHeight);
  });

