import { CURRICULUM_12_NEW_WORKS } from './curriculum12Data';

export interface WorkItem {
  id: string;
  title: string;
  author: string;
  authorBio: string;
  year: string;
  genre: 'tho' | 'truyen' | 'ky' | 'kinh' | 'chinhluan' | 'nuocngoai';
  genreName: string;
  tag: string;
  readTimeMinutes: number;
  summary: string;
  context: string;
  authorAesthetics?: string;
  mainThemes: string[];
  keyAnalysis: {
    heading: string;
    content: string;
    evidence?: string;
    literaryCommentary?: string;
  }[];
  scholarlyQuotes?: {
    critic: string;
    quote: string;
  }[];
  quotes: string[];
  artisticValues: string[];
  essayOutline: {
    introduction: string;
    body: string[];
    conclusion: string;
    bonusPoints?: string;
  };
  examPrompts: string[];
  keywords: string[];
  audioText?: string;
}

export const WORKS_DATA: WorkItem[] = [
  {
    id: 'tay-tien',
    title: 'Tây Tiến',
    author: 'Quang Dũng',
    authorBio: 'Quang Dũng (1921 - 1988), tên khai sinh Bùi Đình Diệm, quê ở làng Phượng Trì, huyện Đan Phượng, Hà Nội. Là một nghệ sĩ đa tài: làm thơ, viết văn, vẽ tranh và soạn nhạc. Hồn thơ phóng khoáng, hồn hậu, lãng mạn và tài hoa, đặc biệt nhạy cảm với vẻ đẹp thiên nhiên và nghĩa tình con người.',
    year: '1948',
    genre: 'tho',
    genreName: 'Thơ',
    tag: 'Thơ ca kháng chiến',
    readTimeMinutes: 12,
    summary: 'Bài thơ tái hiện chặng đường hành quân gian nan của đoàn quân Tây Tiến qua miền rừng núi Tây Bắc hùng vĩ, hiểm trở mà thơ mộng; dựng lên bức tượng đài bất tử về người lính vệ quốc thời đầu kháng chiến chống Pháp: hào hoa, bi tráng, đậm chất lãng mạn và lý tưởng hiến dâng.',
    context: 'Đoàn quân Tây Tiến được thành lập đầu năm 1947, có nhiệm vụ phối hợp với bộ đội Lào bảo vệ biên giới phía Tây của Tổ quốc. Địa bàn hoạt động rộng lớn, hiểm trở: Hòa Bình, Sơn La, Lai Châu, Sầm Nưa. Chiến sĩ phần đông là thanh niên, học sinh, trí thức Hà Nội giàu lòng yêu nước. Năm 1948, tại Phù Lưu Chanh (Hà Đông cũ), Quang Dũng rời đơn vị cũ và vì nỗi nhớ da diết đồng đội nên đã viết bài thơ này (ban đầu có tên "Nhớ Tây Tiến", sau đổi thành "Tây Tiến" khi in lại năm 1986).',
    authorAesthetics: 'Quan niệm nghệ thuật của Quang Dũng hướng về vẻ đẹp bi tráng và lãng mạn. Ông không lẩn tránh sự khốc liệt, bệnh tật hay hy sinh nhưng luôn nâng đỡ hiện thực bằng đôi cánh lãng mạn, sự hào hoa của người thanh niên Thủ đô mang lý tưởng quyết tử để Tổ quốc quyết sinh.',
    mainThemes: [
      'Nỗi nhớ da diết bao trùm không gian và thời gian về đồng đội và miền đất Tây Bắc',
      'Bức tranh thiên nhiên miền Tây vừa hiểm trở, dữ dội, hoang sơ vừa thơ mộng, trữ tình, huyền ảo',
      'Tượng đài người lính Tây Tiến kết hợp hài hòa vẻ đẹp hào hoa lãng tử và tinh thần bi tráng quật cường',
      'Tình quân dân thắm thiết ấm áp trong đêm hội đuốc hoa và khúc tráng ca sông Mã vĩnh hằng'
    ],
    keyAnalysis: [
      {
        heading: 'Nỗi nhớ da diết và bức tranh thiên nhiên Tây Bắc trên chặng đường hành quân',
        content: 'Bài thơ mở đầu bằng tiếng gọi tha thiết "Sông Mã xa rồi Tây Tiến ơi! / Nhớ về rừng núi, nhớ chơi vơi". Từ láy "chơi vơi" đặc tả một trạng thái tâm lý bồng bềnh, hư ảo, nỗi nhớ không đo đếm được. Địa hình hiểm trở hiện lên qua các địa danh giàu âm hưởng xa xôi: Sài Khao, Mường Lát, Pha Luông. Những câu thơ giàu thanh trắc và từ láy tượng hình "khúc khuỷu", "thăm thẳm", "heo hút" tái hiện sự trập trùng hiểm nguy của dốc núi. Đỉnh cao nghệ thuật là hình ảnh nhân hóa "heo hút cồn mây súng ngửi trời" - vừa đo độ cao ngất trời của đỉnh đèo, vừa toát lên chất tinh nghịch, lạc quan kiêu dũng của người lính trẻ. Đan cài vào nét hiểm trở là vẻ đẹp lãng mạn tuyệt mỹ: "Nhà ai Pha Luông mưa xa khơi" toàn thanh bằng êm ả như làn sương mỏng xoa dịu đôi chân hành quân mệt mỏi.',
        evidence: '"Dốc lên khúc khuỷu dốc thăm thẳm / Heo hút cồn mây súng ngửi trời / Ngàn thước lên cao, ngàn thước xuống / Nhà ai Pha Luông mưa xa khơi"',
        literaryCommentary: 'Nguyễn Đăng Mạnh nhận định: "Quang Dũng đã dùng sự tương phản giữa nét gân guốc dữ dội và nét mềm mại bồng bềnh để tạo nên một bức tranh sơn mài Tây Bắc kiệt tác."'
      },
      {
        heading: 'Kỷ niệm ấm áp tình quân dân và không gian lãng mạn miền sơn cước',
        content: 'Gian khổ tạm lùi xa nhường chỗ cho những kỷ niệm ngọt ngào tình đồng đội và quân dân. "Doanh trại bừng lên hội đuốc hoa": từ "bừng" vừa gợi ánh sáng rực rỡ của ngọn đuốc, vừa gợi niềm vui bừng sáng trong tâm hồn người lính. Không khí rộn rã với âm nhạc miền Tây "khèn lên man điệu", những thiếu nữ e ấp duyên dáng trong bộ trang phục "xiêm áo tự bao giờ". Bức tranh sông nước Châu Mộc huyền ảo trong buổi chiều sương buông bảng lảng: "Người đi Châu Mộc chiều sương ấy / Có thấy hồn lau nẻo bến bờ / Có nhớ dáng người trên độc mộc / Trôi dòng nước lũ hoa đong đưa". Bút pháp lãng mạn thi vị hóa thiên nhiên hoang dã thành một miền cổ tích huyền ảo.',
        evidence: '"Doanh trại bừng lên hội đuốc hoa / Kìa em xiêm áo tự bao giờ / Khèn lên man điệu nàng e ấp / Nhạc về Viên Chăn xây hồn thơ"',
        literaryCommentary: 'Chất thơ hòa quyện chất họa và chất nhạc: giai điệu mềm mại, từ ngữ giàu tính tạo hình đưa người đọc lạc vào một thế giới văn hóa Tây Bắc lung linh đa sắc.'
      },
      {
        heading: 'Chân dung tượng đài người lính Tây Tiến: Hào hùng, Hào hoa và Bi tráng',
        content: 'Chân dung người lính được khắc họa chân thực và lãng mạn: "Tây Tiến đoàn binh không mọc tóc / Quân xanh màu lá dữ oai hùm". Căn bệnh sốt rét rừng hiểm ác khiến đầu rụng tóc, da xanh xao như màu lá nhưng khí phách vẫn toát lên vẻ uy dũng của loài mãnh chúa sơn lâm ("dữ oai hùm"). Ẩn giấu sau dáng vẻ gân guốc ấy là một thế giới tâm hồn lãng mạn, thanh lịch của tuổi trẻ Hà thành: "Mắt trừng gửi mộng qua biên giới / Đêm mơ Hà Nội dáng kiều thơm". "Mắt trừng" biểu thị ý chí căm thù giặc sắt đá, còn "dáng kiều thơm" là bến đỗ bình yên của nỗi nhớ, là nguồn động lực tiếp thêm sức mạnh chiến đấu chứ không hề yếu đuối, bi lụy.',
        evidence: '"Tây Tiến đoàn binh không mọc tóc / Quân xanh màu lá dữ oai hùm / Mắt trừng gửi mộng qua biên giới / Đêm mơ Hà Nội dáng kiều thơm"',
        literaryCommentary: 'Đây là cái nhìn nhân bản sâu sắc của Quang Dũng: người lính vệ quốc không phải là cỗ máy chiến tranh mà là những con người bằng xương bằng thịt, có lý tưởng cao cả và trái tim dạt dào tình yêu lứa đôi.'
      },
      {
        heading: 'Sự hy sinh bi tráng và khúc độc hành bất tử của dòng sông Mã',
        content: 'Quang Dũng không né tránh hiện thực khốc liệt về cái chết: "Rải rác biên cương mồ viễn xứ". Nhưng ngay lập tức câu thơ sau đã nâng đỡ bằng tư thế hiên ngang ngút ngàn: "Chiến trường đi chẳng tiếc đời xanh". Người lính xem cái chết nhẹ tựa lông hồng, dấn thân vì Tổ quốc thiêng liêng. Chi tiết "Áo bào thay chiếu anh về đất": người lính hy sinh giữa rừng sâu chỉ manh chiếu rách bó thân, nhưng qua lăng kính thi ca tráng lệ của Quang Dũng, manh chiếu biến thành tấm áo bào của các bậc dũng tướng thời xưa. Đất mẹ mở rộng lòng đón người con anh hùng ("anh về đất" là cách nói giảm nói tránh thanh thản). Lời tiễn đưa cuối cùng không phải là tiếng khóc than bi lụy mà là tiếng gầm vang trời dậy đất của thiên nhiên: "Sông Mã gầm lên khúc độc hành". Sông Mã thay lời non sông đất nước tấu lên bản hợp xướng bi tráng tiễn đưa người anh hùng vào cõi vĩnh hằng.',
        evidence: '"Rải rác biên cương mồ viễn xứ / Chiến trường đi chẳng tiếc đời xanh / Áo bào thay chiếu, anh về đất / Sông Mã gầm lên khúc độc hành"',
        literaryCommentary: 'Vẻ đẹp bi tráng đạt đến đỉnh cao: bi nhưng không lụy, mất mát nhưng ngập tràn hào khí tráng lệ.'
      }
    ],
    scholarlyQuotes: [
      {
        critic: 'Nhà thơ Vũ Quần Phương',
        quote: 'Quang Dũng đứng ở đỉnh cao của thơ ca lãng mạn thời kháng chiến. Đọc Tây Tiến, ta như nghe thấy cả nhịp thở hào hoa của đất Thăng Long hòa quyện vào khí phách sông núi miền Tây.'
      },
      {
        critic: 'GS. Nguyễn Đăng Mạnh',
        quote: 'Tây Tiến là sự thăng hoa tuyệt vời của cảm hứng lãng mạn và tinh thần bi tráng. Không có ngòi bút tài hoa của Quang Dũng, hình tượng người lính thời chống Pháp khó lòng có được một tượng đài lộng lẫy đến thế.'
      },
      {
        critic: 'Nhà phê bình Trần Đình Sử',
        quote: 'Chất bi tráng trong Tây Tiến được thanh lọc qua cảm xúc thẩm mỹ lãng mạn, biến cái chết và sự hy sinh thành khúc tráng ca muôn đời không tắt.'
      }
    ],
    quotes: [
      'Sông Mã xa rồi Tây Tiến ơi! / Nhớ về rừng núi, nhớ chơi vơi',
      'Sài Khao sương lấp đoàn quân mỏi / Mường Lát hoa về trong đêm hơi',
      'Dốc lên khúc khuỷu dốc thăm thẳm / Heo hút cồn mây súng ngửi trời / Ngàn thước lên cao, ngàn thước xuống / Nhà ai Pha Luông mưa xa khơi',
      'Anh bạn dãi dầu không bước nữa / Gục lên súng mũ bỏ quên đời!',
      'Nhớ ôi Tây Tiến cơm lên khói / Mai Châu mùa em thơm nếp xôi',
      'Doanh trại bừng lên hội đuốc hoa / Kìa em xiêm áo tự bao giờ / Khèn lên man điệu nàng e ấp / Nhạc về Viên Chăn xây hồn thơ',
      'Người đi Châu Mộc chiều sương ấy / Có thấy hồn lau nẻo bến bờ / Có nhớ dáng người trên độc mộc / Trôi dòng nước lũ hoa đong đưa',
      'Tây Tiến đoàn binh không mọc tóc / Quân xanh màu lá dữ oai hùm / Mắt trừng gửi mộng qua biên giới / Đêm mơ Hà Nội dáng kiều thơm',
      'Rải rác biên cương mồ viễn xứ / Chiến trường đi chẳng tiếc đời xanh / Áo bào thay chiếu, anh về đất / Sông Mã gầm lên khúc độc hành',
      'Tây Tiến người đi không hẹn ước / Đường lên thăm thẳm một chia phôi / Ai lên Tây Tiến mùa xuân ấy / Hồn về Sầm Nứa chẳng về xuôi'
    ],
    artisticValues: [
      'Bút pháp lãng mạn kết hợp nhuần nhuyễn cảm hứng hiện thực và âm hưởng bi tráng hào hùng',
      'Nghệ thuật đối lập tương phản tài tình: giữa dữ dội và thơ mộng, hiểm nguy và hào hoa, gian khổ và kiêu dũng',
      'Ngôn ngữ giàu chất tạo hình, phối thanh điêu luyện (đan cài thanh trắc gân guốc và thanh bằng mênh mang)',
      'Hệ thống từ Hán Việt cổ kính, trang trọng ("biên cương", "viễn xứ", "áo bào", "độc hành") tôn vinh vẻ đẹp sử thi'
    ],
    essayOutline: {
      introduction: 'Dẫn dắt từ đề tài người lính vệ quốc trong kháng chiến chống Pháp - nguồn cảm hứng thiêng liêng của văn học cách mạng. Giới thiệu nhà thơ Quang Dũng - người nghệ sĩ đa tài, lãng mạn của xứ Đoài mây trắng. Nêu xuất xứ tác phẩm "Tây Tiến" (1948) và khẳng định đây là bức tượng đài tráng lệ, bi tráng và hào hoa nhất về người lính trí thức Thủ đô.',
      body: [
        '1. Khái quát chung: Bối cảnh thành lập đoàn binh Tây Tiến gian lao, địa bàn hiểm trở và cảm hứng sáng tác từ nỗi nhớ khôn nguôi tại Phù Lưu Chanh.',
        '2. Luận điểm 1: Bức tranh thiên nhiên miền Tây và chặng đường hành quân gian nan hiểm trở (đoạn 1). Phân tích nỗi nhớ "chơi vơi", địa hình dốc đứng "khúc khuỷu", "thăm thẳm", hình ảnh nhân hóa tếu táo "súng ngửi trời", nét mộng ảo "Pha Luông mưa xa khơi" và tình quân dân "Mai Châu mùa em thơm nếp xôi".',
        '3. Luận điểm 2: Kỷ niệm ấm áp tình quân dân và vẻ đẹp lãng mạn miền sơn cước (đoạn 2). Đêm liên hoan rực rỡ đuốc hoa, âm nhạc khèn man điệu, nét duyên dáng thiếu nữ miền Tây và cảnh sông nước Châu Mộc huyền ảo "chiều sương ấy".',
        '4. Luận điểm 3: Chân dung tượng đài người lính Tây Tiến hào hùng, hào hoa (đoạn 3). Ngoại hình gân guốc "không mọc tóc", "quân xanh màu lá" do sốt rét rừng nhưng khí phách "dữ oai hùm". Thế giới nội tâm lãng mạn hướng về Thủ đô "Đêm mơ Hà Nội dáng kiều thơm".',
        '5. Luận điểm 4: Vẻ đẹp bi tráng trong sự hy sinh và khúc độc hành sông Mã (đoạn 3 kết). Lý tưởng cống hiến "Chiến trường đi chẳng tiếc đời xanh", sự tráng lệ hóa qua "Áo bào thay chiếu anh về đất" và khúc tráng ca sông Mã vĩnh hằng tiễn đưa.',
        '6. Luận điểm 5: Đánh giá nét đặc sắc về nghệ thuật (bút pháp lãng mạn, sự tương phản tài tình, nhạc tính trầm hùng và ngôn từ chọn lọc điêu luyện).',
        '7. Nhận xét nâng cao / Yêu cầu phụ: Nêu bật chất bi tráng độc đáo của Quang Dũng - bi nhưng không lụy, thể hiện khí phách ngút trời của thế hệ thanh niên Việt Nam thời đầu kháng chiến.'
      ],
      conclusion: 'Đúc kết giá trị kiệt tác: "Tây Tiến" là đỉnh cao thi ca kháng chiến chống Pháp, minh chứng cho sức mạnh của nghệ thuật lãng mạn chân chính. Tác phẩm in sâu vào tâm khảm bao thế hệ lòng biết ơn và niềm tự hào dân tộc.',
      bonusPoints: 'Liên hệ đối chiếu với hình tượng người lính xuất thân nông dân mộc mạc trong "Đồng chí" của Chính Hữu hoặc trích nhận định của Vũ Quần Phương về vẻ đẹp hào hoa Thăng Long để đạt điểm 9.5.'
    },
    examPrompts: [
      'Cảm nhận về vẻ đẹp bi tráng và lãng mạn của hình tượng người lính Tây Tiến qua đoạn thơ: "Tây Tiến đoàn binh không mọc tóc... Sông Mã gầm lên khúc độc hành". Từ đó, nhận xét về nét độc đáo trong phong cách thơ Quang Dũng.',
      'Phân tích bức tranh thiên nhiên miền Tây và tâm hồn người lính trong 14 câu đầu bài thơ Tây Tiến ("Sông Mã xa rồi... thơm nếp xôi").',
      'Cảm nhận vẻ đẹp lãng mạn, thi vị của cảnh đêm hội và cảnh sông nước miền Tây qua đoạn thơ thứ hai trong bài thơ Tây Tiến ("Doanh trại bừng lên... hoa đong đưa").',
      'So sánh vẻ đẹp người lính trong bài thơ "Tây Tiến" (Quang Dũng) và bài thơ "Đồng chí" (Chính Hữu) để làm nổi bật nét đa dạng của hình tượng người lính vệ quốc.'
    ],
    keywords: [
      'Lãng mạn',
      'Bi tráng',
      'Hào hoa',
      'Nhớ chơi vơi',
      'Súng ngửi trời',
      'Dáng kiều thơm',
      'Chiến trường đi chẳng tiếc đời xanh',
      'Áo bào thay chiếu',
      'Sông Mã gầm khúc độc hành',
      'Hội đuốc hoa'
    ],
    audioText: 'Tây Tiến của Quang Dũng là bản trường ca bất tử về người lính vệ quốc. Bằng cảm hứng lãng mạn bay bổng và âm hưởng bi tráng hào hùng, nhà thơ đã tạc nên bức tượng đài tráng lệ về thế hệ thanh niên Thủ đô dấn thân vào khói lửa chiến tranh với lý tưởng chiến trường đi chẳng tiếc đời xanh.'
  },
  {
    id: 'viet-bac',
    title: 'Việt Bắc',
    author: 'Tố Hữu',
    authorBio: 'Tố Hữu (1920 - 2002), tên thật Nguyễn Kim Thành, quê ở Thừa Thiên Huế. Là lá cờ đầu, cánh chim đầu đàn của nền thơ ca cách mạng Việt Nam hiện đại. Thơ Tố Hữu luôn đồng hành cùng các chặng đường lịch sử của dân tộc, mang tính chất trữ tình - chính luận sâu sắc và đậm đà tính dân tộc cả trong nội dung lẫn hình thức nghệ thuật.',
    year: '1954',
    genre: 'tho',
    genreName: 'Thơ',
    tag: 'Thơ ca cách mạng',
    readTimeMinutes: 14,
    summary: 'Tuyệt tác thơ lục bát kết hợp giữa khúc hùng ca kháng chiến oanh liệt và bản tình ca nồng thắm ân tình cách mạng, thể hiện nỗi niềm lưu luyến giữa người cán bộ kháng chiến về xuôi và đồng bào chiến khu Việt Bắc mười lăm năm gắn bó keo sơn.',
    context: 'Tháng 10/1954, sau chiến thắng Điện Biên Phủ lừng lẫy năm châu chấn động địa cầu và Hiệp định Giơ-ne-vơ được ký kết, hòa bình lập lại ở miền Bắc. Trung ương Đảng và Chính phủ rời căn cứ địa cách mạng Việt Bắc trở về tiếp quản Thủ đô Hà Nội. Cuộc chia tay lịch sử thiêng liêng giữa nhân dân và cán bộ kháng chiến đã thôi thúc Tố Hữu viết nên thi phẩm trường thiên "Việt Bắc".',
    authorAesthetics: 'Thơ Tố Hữu là tiếng nói của "cái ta" cộng đồng, của lý tưởng Đảng và nhân dân. Ông có biệt tài biến các sự kiện chính trị trọng đại của đất nước thành chuyện tâm tình lứa đôi ngọt ngào, thấm thía thông qua thể thơ lục bát truyền thống và ca dao dân ca.',
    mainThemes: [
      'Tình nghĩa cách mạng thủy chung son sắt giữa nhân dân Việt Bắc và cán bộ về xuôi',
      'Bức tranh tứ bình thiên nhiên và con người lao động bốn mùa tươi đẹp, nghĩa tình',
      'Hồi ức về cuộc sống sinh hoạt kháng chiến gian khổ nhưng ấm áp tình người',
      'Khí thế hào hùng sục sôi của các chiến dịch cách mạng và niềm tin vào tương lai tươi sáng'
    ],
    keyAnalysis: [
      {
        heading: 'Khung cảnh chia tay lịch sử và kết cấu đối đáp mình - ta',
        content: 'Tố Hữu đã mượn hình thức hát giao duyên đối đáp quen thuộc của ca dao cổ truyền để diễn tả cuộc chia tay chính trị. Cặp đại từ xưng hô "mình - ta" vốn thuộc về lứa đôi nay được chuyển hóa linh hoạt: người ở lại hỏi, người ra đi đáp, hòa quyện làm một. "Mười lăm năm ấy thiết tha mặn nồng": mười lăm năm từ khởi nghĩa Bắc Sơn (1940) đến ngày giải phóng (1954) là chiều dài của lịch sử máu và hoa. Hình ảnh "Áo chàm đưa buổi phân ly / Cầm tay nhau biết nói gì hôm nay" với dấu chấm lửng nghẹn ngào chứa đựng bao xúc cảm không lời.',
        evidence: '"Mình về mình có nhớ ta / Mười lăm năm ấy thiết tha mặn nồng / Mình về mình có nhớ không / Nhìn cây nhớ núi, nhìn sông nhớ nguồn?"',
        literaryCommentary: 'Xuân Diệu nhận xét: "Tố Hữu đã đưa lục bát Việt Nam đạt đến trình độ điêu luyện bậc thầy, vừa ngọt ngào như lời ru của mẹ, vừa đượm đà như ca dao dân tộc."'
      },
      {
        heading: 'Bức tranh tứ bình bốn mùa tuyệt mỹ của núi rừng Việt Bắc',
        content: 'Đoạn thơ mười câu khắc họa bức tranh tứ bình bốn mùa (Đông - Xuân - Hạ - Thu) là đỉnh cao nghệ thuật của thi phẩm. Cứ một câu tả cảnh lại đi liền với một câu tả người trong tư thế lao động đẹp đẽ. Mùa đông rực sáng với sắc "hoa chuối đỏ tươi" giữa nền xanh đại ngàn và ánh thép kiêu dũng "Đèo cao nắng ánh dao gài thắt lưng". Mùa xuân tinh khôi với sắc "mơ nở trắng rừng" cùng hình ảnh con người cần cù "đan nón chuốt từng sợi giang". Mùa hạ rộn rã âm thanh ve kêu và thị giác kỳ diệu "rừng phách đổ vàng" cùng cô gái hái măng chịu thương chịu khó. Mùa thu chan hòa ánh trăng hòa bình cùng tiếng hát ân tình thủy chung son sắt.',
        evidence: '"Rừng xanh hoa chuối đỏ tươi / Đèo cao nắng ánh dao gài thắt lưng / Ngày xuân mơ nở trắng rừng / Nhớ người đan nón chuốt từng sợi giang / Ve kêu rừng phách đổ vàng / Nhớ cô em gái hái măng một mình / Rừng thu trăng rọi hòa bình / Nhớ ai tiếng hát ân tình thủy chung"',
        literaryCommentary: 'Thi pháp cổ điển kết hợp tinh thần thời đại: con người không còn nhỏ bé cô đơn trước thiên nhiên mà trở thành trung tâm tỏa sáng của bức tranh vũ trụ.'
      },
      {
        heading: 'Âm hưởng sử thi tráng lệ trong khí thế Việt Bắc ra trận',
        content: 'Từ giọng điệu ngọt ngào tâm tình, bài thơ chuyển biến sang âm hưởng trầm hùng, dồn dập của bản trường ca lịch sử: "Những đường Việt Bắc của ta / Đêm đêm rầm rập như là đất rung". Nghệ thuật điệp từ "điệp điệp trùng trùng" cùng hình tượng kỳ vĩ "Ánh sao đầu súng bạn cùng mũ nan" vừa tả thực ánh sao trời soi đầu ngọn súng, vừa biểu tượng cho ngôi sao lý tưởng soi đường cho người chiến sĩ giải phóng quân tiến lên.',
        evidence: '"Những đường Việt Bắc của ta / Đêm đêm rầm rập như là đất rung / Quân đi điệp điệp trùng trùng / Ánh sao đầu súng bạn cùng mũ nan / Dân công đỏ đuốc từng đoàn / Bước chân nát đá muôn tàn lửa bay"',
        literaryCommentary: 'Sức mạnh quật khởi của cả một dân tộc được đúc kết qua hình tượng thơ kỳ vĩ, toát lên niềm tin tất thắng của cuộc kháng chiến toàn dân toàn diện.'
      }
    ],
    scholarlyQuotes: [
      {
        critic: 'Nhà thơ Chế Lan Viên',
        quote: 'Việt Bắc là đỉnh thơ cao nhất mà Tố Hữu đã bước lên. Ở đó, hồn dân tộc và hồn cách mạng hòa làm một trong giai điệu lục bát ngọt ngào đến mê say.'
      },
      {
        critic: 'GS. Hà Minh Đức',
        quote: 'Tố Hữu đã thành công xuất sắc trong việc biến tình cảm chính trị lớn lao của cả một thời đại thành những rung động trữ tình đằm thắm của trái tim.'
      }
    ],
    quotes: [
      'Mình về mình có nhớ ta / Mười lăm năm ấy thiết tha mặn nồng / Mình về mình có nhớ không / Nhìn cây nhớ núi, nhìn sông nhớ nguồn?',
      'Áo chàm đưa buổi phân ly / Cầm tay nhau biết nói gì hôm nay...',
      'Nhớ gì như nhớ người yêu / Trăng lên đầu núi, nắng chiều lưng nương / Nhớ từng bản khói cùng sương / Bếp lửa nhân nghĩa, chia củ sắn lùi',
      'Thương nhau chia củ sắn lùi / Bát cơm sẻ nửa, chăn sui đắp cùng',
      'Rừng xanh hoa chuối đỏ tươi / Đèo cao nắng ánh dao gài thắt lưng / Ngày xuân mơ nở trắng rừng / Nhớ người đan nón chuốt từng sợi giang',
      'Ve kêu rừng phách đổ vàng / Nhớ cô em gái hái măng một mình / Rừng thu trăng rọi hòa bình / Nhớ ai tiếng hát ân tình thủy chung',
      'Những đường Việt Bắc của ta / Đêm đêm rầm rập như là đất rung / Quân đi điệp điệp trùng trùng / Ánh sao đầu súng bạn cùng mũ nan',
      'Dân công đỏ đuốc từng đoàn / Bước chân nát đá muôn tàn lửa bay'
    ],
    artisticValues: [
      'Thể thơ lục bát truyền thống đạt đến đỉnh cao tinh hoa của nhịp điệu và nhạc tính',
      'Kết cấu đối đáp mình - ta biến vấn đề chính trị thành câu chuyện tâm tình lứa đôi ngọt ngào',
      'Đậm đà tính dân tộc trong nội dung đạo lý "Uống nước nhớ nguồn" và hình thức thi pháp ca dao',
      'Bút pháp tả cảnh ngụ tình tinh tế, ngôn ngữ giản dị, mộc mạc mà thấm đẫm ân tình'
    ],
    essayOutline: {
      introduction: 'Giới thiệu Tố Hữu - ngọn cờ đầu của thơ ca cách mạng Việt Nam. Nêu xuất xứ tác phẩm "Việt Bắc" trong sự kiện lịch sử tháng 10/1954 và khái quát giá trị bài thơ: khúc tình ca và hùng ca về ân tình kháng chiến.',
      body: [
        '1. Khái quát hoàn cảnh lịch sử: Hiệp định Giơ-ne-vơ 1954, cuộc chia tay lưu luyến giữa căn cứ địa cách mạng và người cán bộ kháng chiến.',
        '2. Luận điểm 1: Bốn câu thơ đầu - Khúc dạo đầu chia tay bịn rịn và nỗi niềm trăn trở của người ở lại (đối đáp mình - ta, mười lăm năm kháng chiến).',
        '3. Luận điểm 2: Bốn câu thơ sau - Nỗi lòng xao xuyến của người ra đi qua hình ảnh "áo chàm" và cái nắm tay im lặng nghẹn ngào.',
        '4. Luận điểm 3: Nỗi nhớ cuộc sống và con người Việt Bắc gian lao mà son sắt nghĩa tình (nhớ như nhớ người yêu, chia củ sắn lùi, bát cơm sẻ nửa).',
        '5. Luận điểm 4: Bức tranh tứ bình bốn mùa Việt Bắc (Đông, Xuân, Hạ, Thu) - vẻ đẹp giao hòa giữa thiên nhiên tươi sáng và con người lao động cần cù.',
        '6. Luận điểm 5: Khí thế hào hùng của các chiến dịch cách mạng (Việt Bắc ra trận) và vai trò đầu não kháng chiến.',
        '7. Đánh giá đặc sắc nghệ thuật: Tính dân tộc đậm đà, thể thơ lục bát nhuần nhuyễn, ngôn ngữ giàu nhạc tính ca dao.'
      ],
      conclusion: 'Khẳng định giá trị kiệt tác: Bài thơ là bài học đạo lý thủy chung muôn đời của dân tộc Việt Nam, sống mãi cùng năm tháng lịch sử.',
      bonusPoints: 'Phân tích chiều sâu triết lý "nhìn cây nhớ núi, nhìn sông nhớ nguồn" và liên hệ với đạo lý cội nguồn của dân tộc để đạt điểm tuyệt đối.'
    },
    examPrompts: [
      'Phân tích bức tranh tứ bình bốn mùa trong bài thơ "Việt Bắc" của Tố Hữu (đoạn "Rừng xanh hoa chuối đỏ tươi... ân tình thủy chung"). Từ đó, nhận xét về tính dân tộc đậm đà trong phong cách thơ Tố Hữu.',
      'Cảm nhận về khúc ca ân tình cách mạng qua 8 câu đầu bài thơ Việt Bắc.',
      'Phân tích nỗi nhớ Việt Bắc trong đoạn thơ: "Nhớ gì như nhớ người yêu... đắp cùng" để làm nổi bật tình cảm gắn bó máu thịt giữa cán bộ và nhân dân.'
    ],
    keywords: [
      'Tính dân tộc',
      'Lục bát điêu luyện',
      'Mình - ta',
      'Trữ tình chính luận',
      'Bức tranh tứ bình',
      'Áo chàm',
      'Mười lăm năm ấy',
      'Sắn lùi chia nửa',
      'Ánh sao đầu súng',
      'Rừng phách đổ vàng'
    ],
    audioText: 'Việt Bắc của Tố Hữu là đỉnh cao chói lọi của thơ ca kháng chiến chống Pháp. Bằng thể thơ lục bát truyền thống và cặp đại từ mình ta tha thiết, bài thơ đã biến cuộc chia tay lịch sử tháng mười năm 1954 thành bản tình ca bất tử về đạo lý uống nước nhớ nguồn của dân tộc Việt Nam.'
  },
  {
    id: 'dat-nuoc',
    title: 'Đất Nước',
    author: 'Nguyễn Khoa Điềm',
    authorBio: 'Nguyễn Khoa Điềm (sinh 1943), quê ở thôn Ưu Điềm, xã Phong Hòa, huyện Phong Điền, Thừa Thiên Huế. Thuộc thế hệ các nhà thơ trẻ thời kỳ kháng chiến chống Mỹ cứu nước. Thơ ông giàu chất suy tư, xúc cảm lắng đọng và chất chính luận - triết lý sâu sắc của người trí thức dấn thân.',
    year: '1971',
    genre: 'tho',
    genreName: 'Thơ',
    tag: 'Trường ca chống Mỹ',
    readTimeMinutes: 13,
    summary: 'Đoạn trích đem đến một cái nhìn mới mẻ, sâu sắc và toàn diện về Tổ quốc: Đất Nước không phải là khái niệm trừu tượng xa vời mà hình thành từ những phong tục, nếp sống bình dị và thuộc về Nhân Dân lao động ngàn đời.',
    context: 'Trích phần đầu chương V của bản trường ca "Mặt đường khát vọng", hoàn thành tại chiến khu Trị - Thiên năm 1971. Tác phẩm hướng tới việc thức tỉnh tinh thần dân tộc và ý thức trách nhiệm của tuổi trẻ các đô thị tạm chiếm miền Nam xuống đường đấu tranh chống đế quốc Mỹ.',
    authorAesthetics: 'Nguyễn Khoa Điềm nhìn nhận Đất Nước qua lăng kính văn hóa dân gian (folklore). Ông khám phá chất ngọc trong ca dao, cổ tích, phong tục để xây dựng nên một định nghĩa thi ca độc đáo: Đất Nước của Nhân Dân.',
    mainThemes: [
      'Cội nguồn sinh thành của Đất Nước bắt đầu từ những gì thân thuộc, bình dị nhất trong đời sống nhân dân',
      'Đất Nước trên ba bình diện: chiều rộng không gian địa lý, chiều dài thời gian lịch sử và chiều sâu phong tục văn hóa',
      'Tư tưởng triết luận cốt lõi: Đất Nước của Nhân Dân, Đất Nước của ca dao thần thoại',
      'Trách nhiệm thiêng liêng và ý thức hiến dâng của thế hệ trẻ đối với giang sơn xứ sở'
    ],
    keyAnalysis: [
      {
        heading: 'Cội nguồn sinh thành của Đất Nước từ những điều bình dị, thân thương',
        content: 'Khác với quan niệm phong kiến xem Đất Nước gắn với triều đại đế vương, Nguyễn Khoa Điềm khẳng định Đất Nước lớn lên cùng tuổi thơ mỗi người: "Khi ta lớn lên Đất Nước đã có rồi / Đất Nước có trong những cái \'ngày xửa ngày xưa...\' mẹ thường hay kể". Đất Nước hiện hữu trong miếng trầu bà ăn, thói quen búi tóc sau đầu của mẹ, tình nghĩa thủy chung vợ chồng "gừng cay muối mặn", cái kèo cái cột trong nếp nhà và hạt gạo nuôi sống con người qua một nắng hai sương xay giã giần sàng.',
        evidence: '"Đất Nước bắt đầu với miếng trầu bây giờ bà ăn / Đất Nước lớn lên khi dân mình biết trồng tre mà đánh giặc / Tóc mẹ thì bới sau đầu / Cha mẹ thương nhau bằng gừng cay muối mặn"',
        literaryCommentary: 'Vận dụng sáng tạo chất liệu ca dao tục ngữ: không trích nguyên văn mà lọc lấy hồn cốt tinh hoa, làm sống dậy cả một không gian văn hóa người Việt.'
      },
      {
        heading: 'Đất Nước trong không gian, thời gian và trách nhiệm thiêng liêng',
        content: 'Về không gian: Đất Nước vừa là không gian sinh hoạt riêng tư ngọt ngào "Đất là nơi anh đến trường / Nước là nơi em tắm", vừa là không gian hẹn hò lãng mạn "nơi em đánh rơi chiếc khăn trong nỗi nhớ thầm", và là giang sơn rừng vàng biển bạc rộng lớn nơi "con chim phượng hoàng bay về hòn núi bạc". Về thời gian: Đất Nước nối liền dòng dõi cội nguồn Lạc Long Quân - Âu Cơ đến thế hệ mai sau. Từ đó, nhà thơ cất lên lời nhắn nhủ gan ruột: "Em ơi em Đất Nước là máu xương của mình / Phải biết gắn bó và san sẻ / Phải biết hóa thân cho dáng hình xứ sở / Làm nên Đất Nước muôn đời".',
        evidence: '"Em ơi em Đất Nước là máu xương của mình / Phải biết gắn bó và san sẻ / Phải biết hóa thân cho dáng hình xứ sở / Làm nên Đất Nước muôn đời..."',
        literaryCommentary: 'Giọng thơ tâm tình đằm thắm: lời thơ như cuộc trò chuyện giữa anh và em nhưng chứa đựng sứ mệnh công dân lớn lao trước vận mệnh non sông.'
      },
      {
        heading: 'Tư tưởng bao trùm: Đất Nước của Nhân Dân',
        content: 'Chính nhân dân lao động bình dị đã hóa thân làm nên địa lý: những người vợ nhớ chồng hóa núi Vọng Phu, cặp vợ chồng yêu nhau góp hòn Trống Mái, người học trò nghèo góp núi Bút non Nghiên. Trong 4000 năm lịch sử, không chỉ các bậc vua chúa mà hàng triệu người vô danh "Có biết bao người con gái, con trai / Trong bốn ngàn lớp người giống ta lứa tuổi / Họ đã sống và chết / Giản dị và bình tâm / Không ai nhớ mặt đặt tên / Nhưng họ đã làm ra Đất Nước". Nhân dân giữ hạt lúa, truyền ngọn lửa, giữ giọng nói và đánh giặc giữ nước.',
        evidence: '"Để Đất Nước này là Đất Nước của Nhân dân / Đất Nước của Nhân dân, Đất Nước của ca dao thần thoại"',
        literaryCommentary: 'Đỉnh cao tư tưởng thẩm mỹ của thi phẩm: Nguyễn Khoa Điềm đã hoàn thiện tư tưởng Đất Nước của Nhân Dân bằng tiếng nói triết luận thâm trầm và xúc cảm nghệ thuật mãnh liệt.'
      }
    ],
    scholarlyQuotes: [
      {
        critic: 'Nhà phê bình Nguyễn Văn Hạnh',
        quote: 'Chương Đất Nước của Nguyễn Khoa Điềm thể hiện một cách sâu sắc sự kết tinh giữa chiều sâu văn hóa dân gian và ý thức công dân của người trí thức trong thời kỳ bão táp chiến tranh.'
      },
      {
        critic: 'GS. Phong Lê',
        quote: 'Nguyễn Khoa Điềm đã trả Đất Nước về đúng chủ nhân đích thực của nó: Nhân Dân lao động - những người đã vô danh đổ máu xương để làm nên dáng hình non nước.'
      }
    ],
    quotes: [
      'Khi ta lớn lên Đất Nước đã có rồi / Đất Nước có trong những cái "ngày xửa ngày xưa..." mẹ thường hay kể',
      'Đất Nước bắt đầu với miếng trầu bây giờ bà ăn / Đất Nước lớn lên khi dân mình biết trồng tre mà đánh giặc',
      'Tóc mẹ thì bới sau đầu / Cha mẹ thương nhau bằng gừng cay muối mặn / Cái kèo, cái cột thành tên / Hạt gạo phải một nắng hai sương xay, giã, dần, sàng',
      'Đất là nơi anh đến trường / Nước là nơi em tắm / Đất Nước là nơi ta hò hẹn / Đất Nước là nơi em đánh rơi chiếc khăn trong nỗi nhớ thầm',
      'Em ơi em Đất Nước là máu xương của mình / Phải biết gắn bó và san sẻ / Phải biết hóa thân cho dáng hình xứ sở / Làm nên Đất Nước muôn đời...',
      'Những người vợ nhớ chồng còn góp cho Đất Nước những núi Vọng Phu / Cặp vợ chồng yêu nhau góp nên hòn Trống Mái...',
      'Không ai nhớ mặt đặt tên / Nhưng họ đã làm ra Đất Nước',
      'Để Đất Nước này là Đất Nước của Nhân dân / Đất Nước của Nhân dân, Đất Nước của ca dao thần thoại'
    ],
    artisticValues: [
      'Sự kết hợp nhuần nhuyễn giữa chất trữ tình tha thiết và chất chính luận - triết lý sâu sắc',
      'Vận dụng sáng tạo, phong phú chất liệu văn hóa và văn học dân gian (ca dao, tục ngữ, truyền thuyết, phong tục)',
      'Thể thơ tự do phóng khoáng, nhịp điệu biến đổi linh hoạt theo dòng chảy suy tư cảm xúc',
      'Giọng điệu tâm tình trò chuyện ngọt ngào giàu sức thuyết phục và lay động lòng người'
    ],
    essayOutline: {
      introduction: 'Giới thiệu tác giả Nguyễn Khoa Điềm - nhà thơ tiêu biểu của thế hệ trẻ thời chống Mỹ. Giới thiệu trường ca "Mặt đường khát vọng" và đoạn trích "Đất Nước" (Chương V). Nêu tư tưởng cốt lõi: Đất Nước của Nhân Dân.',
      body: [
        '1. Cội nguồn sinh thành của Đất Nước: Bắt đầu từ những phong tục, câu chuyện cổ tích, miếng trầu, nếp nhà, hạt gạo một nắng hai sương.',
        '2. Đất Nước trên bình diện không gian và thời gian: Không gian riêng tư đôi lứa và giang sơn rộng lớn; thời gian 4000 năm lịch sử trường tồn.',
        '3. Trách nhiệm thiêng liêng của thế hệ trẻ đối với Đất Nước: "Gắn bó và san sẻ", "Hóa thân cho dáng hình xứ sở".',
        '4. Tư tưởng Đất Nước của Nhân Dân: Nhân dân làm ra địa lý (núi Vọng Phu, hòn Trống Mái...), làm ra lịch sử 4000 năm (hàng triệu người vô danh hy sinh), giữ gìn và truyền lại bản sắc văn hóa.',
        '5. Đánh giá nét đặc sắc về nghệ thuật: Vận dụng chất liệu văn hóa dân gian tài tình, thể thơ tự do, giọng điệu trữ tình - chính luận sâu lắng.'
      ],
      conclusion: 'Khẳng định giá trị đoạn trích: Một bức tượng đài thi ca giàu sức gợi, khơi dậy mãnh liệt lòng yêu nước và ý thức trách nhiệm công dân của tuổi trẻ mọi thời đại.',
      bonusPoints: 'Liên hệ với hình ảnh Đất Nước trong thơ Nguyễn Đình Thi ("Đất nước") hoặc thơ Hoàng Cầm ("Bên kia sông Đuống") để thấy được nét độc đáo riêng của Nguyễn Khoa Điềm.'
    },
    examPrompts: [
      'Phân tích tư tưởng "Đất Nước của Nhân Dân" trong đoạn trích Đất Nước của Nguyễn Khoa Điềm.',
      'Cảm nhận của anh/chị về đoạn thơ: "Khi ta lớn lên Đất Nước đã có rồi... Làm nên Đất Nước muôn đời". Từ đó, nhận xét về sự kết hợp giữa chất chính luận và trữ tình của Nguyễn Khoa Điềm.',
      'Phân tích cách tác giả vận dụng chất liệu văn hóa dân gian trong đoạn trích Đất Nước.'
    ],
    keywords: [
      'Đất Nước của Nhân Dân',
      'Chất liệu dân gian',
      'Gừng cay muối mặn',
      'Chiếc khăn nỗi nhớ thầm',
      'Hóa thân',
      'Máu xương',
      'Bốn ngàn năm lịch sử',
      'Không ai nhớ mặt đặt tên',
      'Triết luận trữ tình'
    ],
    audioText: 'Đất Nước của Nguyễn Khoa Điềm là khúc ca xúc động và thiêng liêng về cội nguồn dân tộc. Đặt nhân dân ở vị trí trung tâm của lịch sử và địa lý, nhà thơ đã thức tỉnh trong lòng tuổi trẻ ý thức cống hiến và lòng tự hào sâu sắc về giang sơn gấm vóc.'
  },
  {
    id: 'song',
    title: 'Sóng',
    author: 'Xuân Quỳnh',
    authorBio: 'Xuân Quỳnh (1942 - 1988), quê ở làng La Khê, thị xã Hà Đông (nay là Hà Nội). Là một trong những gương mặt nữ thi sĩ tiêu biểu nhất của nền thơ ca hiện đại Việt Nam. Tiếng thơ Xuân Quỳnh là tiếng lòng của một tâm hồn phụ nữ giàu trắc ẩn, vừa hồn nhiên, tươi tắn, chân thành, vừa da diết khát khao hạnh phúc bình dị đời thường.',
    year: '1967',
    genre: 'tho',
    genreName: 'Thơ',
    tag: 'Thơ tình lãng mạn',
    readTimeMinutes: 10,
    summary: 'Mượn hình tượng sóng biển đại dương muôn thuở, Xuân Quỳnh bộc lộ những trạng thái tâm lý phong phú, nỗi nhớ nhung da diết, đức hy sinh thủy chung và khát vọng vĩnh cửu hóa tình yêu đích thực của người phụ nữ.',
    context: 'Sáng tác năm 1967 trong chuyến đi thực tế vùng biển Diêm Điền (Thái Bình) khi Xuân Quỳnh 25 tuổi, đang ở độ tuổi thanh xuân rực rỡ nhưng đã nếm trải nhiều trắc trở, đổ vỡ tình cảm. Bài thơ in trong tập "Hoa dọc chiến hào" (1968).',
    authorAesthetics: 'Thơ tình Xuân Quỳnh luôn bộc lộ vẻ đẹp người phụ nữ vừa mang tính truyền thống (dịu dàng, nhẫn nại, thủy chung, hy sinh) vừa mang tính hiện đại (chủ động kiếm tìm hạnh phúc, khát khao dâng hiến và tự khẳng định mình).',
    mainThemes: [
      'Bản chất quy luật và những trạng thái đối cực bí ẩn của tình yêu người phụ nữ',
      'Nỗi nhớ da diết khôn nguôi vượt qua mọi giới hạn không gian, thời gian và tiềm thức',
      'Lòng thủy chung son sắt và niềm tin mãnh liệt vào bến bờ hạnh phúc lứa đôi',
      'Nỗi trăn trở trước sự hữu hạn của đời người và khát vọng hòa nhập vào biển lớn tình yêu nhân loại'
    ],
    keyAnalysis: [
      {
        heading: 'Sóng và Em - Sự tương đồng và những đối cực kỳ diệu',
        content: 'Bài thơ mở đầu bằng những cặp từ tương phản: "Dữ dội và dịu êm / Ồn ào và lặng lẽ". Đó là hai trạng thái đối cực của sóng biển, nhưng cũng chính là những cung bậc cảm xúc thất thường, phong phú trong tâm hồn người phụ nữ khi yêu. Hành trình "Sông không hiểu nổi mình / Sóng tìm ra tận bể" biểu hiện khát vọng chủ động từ bỏ không gian chật hẹp, tù túng để vươn tới đại dương bao la của tình yêu đích thực.',
        evidence: '"Dữ dội và dịu êm / Ồn ào và lặng lẽ / Sông không hiểu nổi mình / Sóng tìm ra tận bể"',
        literaryCommentary: 'Một bước tiến của nữ quyền thi ca: người phụ nữ không còn thụ động chờ đợi mà tự mình vượt qua giới hạn để tìm về bến đỗ thấu hiểu.'
      },
      {
        heading: 'Nỗi nhớ da diết chiếm lĩnh cõi vô thức và lòng thủy chung',
        content: 'Nỗi nhớ trong khổ thơ thứ năm được khắc họa qua không gian ba chiều và thời gian bất tận: "dưới lòng sâu", "trên mặt nước", "ngày đêm không ngủ được". Đỉnh cao của nỗi nhớ là sự vượt thoát khỏi lý trí để tràn vào giấc mơ: "Lòng em nhớ đến anh / Cả trong mơ còn thức". Khổ thơ thứ sáu khẳng định lòng thủy chung duy nhất: dù đất trời có bốn phương tám hướng thì với em chỉ có một phương duy nhất: "Hướng về anh - một phương".',
        evidence: '"Con sóng dưới lòng sâu / Con sóng trên mặt nước / Ôi con sóng nhớ bờ / Ngày đêm không ngủ được / Lòng em nhớ đến anh / Cả trong mơ còn thức"',
        literaryCommentary: 'Câu thơ "Cả trong mơ còn thức" là một phát hiện độc đáo về tâm lý: khi trái tim yêu thức dậy thì ranh giới giữa thực và mộng hoàn toàn bị xóa nhòa.'
      },
      {
        heading: 'Trăn trở âu lo về thời gian và khát vọng bất tử hóa tình yêu',
        content: 'Ý thức sâu sắc về sự chảy trôi của thời gian và kiếp người hữu hạn: "Cuộc đời tuy dài thế / Năm tháng vẫn đi qua / Như biển kia dẫu rộng / Mây vẫn bay về xa". Nỗi âu lo không làm Xuân Quỳnh tuyệt vọng mà thúc đẩy khát khao hiến dâng mãnh liệt: "Làm sao được tan ra / Thành trăm con sóng nhỏ / Giữa biển lớn tình yêu / Để ngàn năm còn vỗ". Hòa cái tôi cá nhân vào cái ta cộng đồng để tình yêu trở thành vĩnh cửu.',
        evidence: '"Làm sao được tan ra / Thành trăm con sóng nhỏ / Giữa biển lớn tình yêu / Để ngàn năm còn vỗ"',
        literaryCommentary: 'Một triết lý nhân sinh cao đẹp: cách duy nhất để chiến thắng thời gian và sự hữu hạn của đời người là hiến dâng trọn vẹn cho tình yêu thương rộng lớn.'
      }
    ],
    scholarlyQuotes: [
      {
        critic: 'Nhà thơ Phan Thị Thanh Nhàn',
        quote: 'Thơ tình Xuân Quỳnh tha thiết, nồng nàn và đầy nữ tính. Đọc Sóng, người ta thấy trái tim người phụ nữ như mở tung ra trước biển cả để đón nhận tình yêu.'
      },
      {
        critic: 'Nhà phê bình Lưu Khánh Thơ',
        quote: 'Sóng là khúc ca tình yêu vừa mang nét đằm thắm của ca dao, vừa mang vẻ đẹp tự chủ, khát khao mãnh liệt của người phụ nữ thời hiện đại.'
      }
    ],
    quotes: [
      'Dữ dội và dịu êm / Ồn ào và lặng lẽ / Sông không hiểu nổi mình / Sóng tìm ra tận bể',
      'Ôi con sóng ngày xưa / Và ngày sau vẫn thế / Nỗi khát vọng tình yêu / Bồi hồi trong ngực trẻ',
      'Sóng bắt đầu từ gió / Gió bắt đầu từ đâu? / Em cũng không biết nữa / Khi nào ta yêu nhau',
      'Con sóng dưới lòng sâu / Con sóng trên mặt nước / Ôi con sóng nhớ bờ / Ngày đêm không ngủ được / Lòng em nhớ đến anh / Cả trong mơ còn thức',
      'Dẫu xuôi về phương bắc / Dẫu ngược về phương nam / Nơi nào em cũng nghĩ / Hướng về anh - một phương',
      'Cuộc đời tuy dài thế / Năm tháng vẫn đi qua / Như biển kia dẫu rộng / Mây vẫn bay về xa',
      'Làm sao được tan ra / Thành trăm con sóng nhỏ / Giữa biển lớn tình yêu / Để ngàn năm còn vỗ'
    ],
    artisticValues: [
      'Thể thơ 5 chữ nhịp nhàng, mô phỏng sinh động nhịp sóng đại dương và nhịp thổn thức của trái tim',
      'Kết cấu song hành hai hình tượng ẩn dụ: Sóng và Em xuyên suốt toàn bài thơ',
      'Ngôn ngữ tự nhiên, giản dị, tha thiết mà tinh tế, giàu giá trị biểu cảm nữ tính',
      'Bút pháp nhân hóa, so sánh liên tưởng sâu sắc kết hợp giữa cảm xúc và suy tư triết lý'
    ],
    essayOutline: {
      introduction: 'Giới thiệu Xuân Quỳnh - nữ hoàng thơ tình thời chống Mỹ. Giới thiệu thi phẩm "Sóng" ra đời năm 1967 tại biển Diêm Điền. Nêu chủ đề: vẻ đẹp tâm hồn người phụ nữ trong tình yêu vừa truyền thống vừa hiện đại.',
      body: [
        '1. Khái quát chung: Xuất xứ tập "Hoa dọc chiến hào" và kết cấu hình tượng sóng đôi Sóng - Em.',
        '2. Luận điểm 1: Những trạng thái đối cực và hành trình tìm ra biển lớn của sóng cũng như tình yêu (khổ 1, 2).',
        '3. Luận điểm 2: Nguồn gốc bí ẩn của sóng và sự bất lực đáng yêu của lí trí khi cắt nghĩa tình yêu (khổ 3, 4).',
        '4. Luận điểm 3: Nỗi nhớ da diết trong không gian, thời gian và cõi tiềm thức cùng lòng thủy chung son sắt (khổ 5, 6).',
        '5. Luận điểm 4: Niềm tin vào bến bờ hạnh phúc và nỗi âu lo trước sự hữu hạn của kiếp người (khổ 7, 8).',
        '6. Luận điểm 5: Khát vọng hóa thân, hiến dâng để tình yêu trở nên bất tử ngàn năm (khổ 9).',
        '7. Đánh giá nghệ thuật: Thể thơ 5 chữ, kết cấu sóng đôi, nhạc điệu dạt dào và tính nữ độc đáo.'
      ],
      conclusion: 'Khẳng định giá trị tác phẩm: "Sóng" là bài thơ tình bất hủ của văn học Việt Nam, ca ngợi tình yêu trong sáng, chung thủy và cao thượng.',
      bonusPoints: 'Liên hệ với nỗi nhớ trong thơ tình Nguyễn Bính ("Tương tư") hoặc thơ tình Xuân Diệu để làm nổi bật nét nữ tính đằm thắm của Xuân Quỳnh.'
    },
    examPrompts: [
      'Cảm nhận về tâm hồn người phụ nữ trong tình yêu qua khổ 5 và khổ 6 của bài thơ "Sóng" (Xuân Quỳnh).',
      'Phân tích hình tượng "Sóng" để làm rõ nét đẹp truyền thống và hiện đại của người phụ nữ khi yêu.',
      'Khát vọng tình yêu bất tử qua hai khổ thơ cuối bài thơ Sóng của Xuân Quỳnh.'
    ],
    keywords: [
      'Sóng và Em',
      'Dữ dội dịu êm',
      'Cả trong mơ còn thức',
      'Hướng về anh một phương',
      'Biển lớn tình yêu',
      'Tan ra thành trăm con sóng',
      'Thủy chung',
      'Nữ tính'
    ],
    audioText: 'Bài thơ Sóng của Xuân Quỳnh là bản tình ca tuyệt đẹp của trái tim người phụ nữ. Ẩn sau nhịp điệu của những con sóng đại dương dào dạt là tiếng lòng thủy chung, son sắt và khát vọng hiến dâng trọn vẹn cho tình yêu đích thực.'
  },
  {
    id: 'dan-ghi-ta-cua-lorca',
    title: 'Đàn ghi ta của Lor-ca',
    author: 'Thanh Thảo',
    authorBio: 'Thanh Thảo (sinh 1943), quê ở Quảng Ngãi. Là một trong những gương mặt thơ ca tiêu biểu của thế hệ kháng chiến chống Mỹ, nổi bật với xu hướng cách tân thi pháp, đào sâu vào bản thể và khát khao đổi mới ngôn ngữ thơ hiện đại.',
    year: '1979',
    genre: 'tho',
    genreName: 'Thơ',
    tag: 'Thơ tượng trưng hiện đại',
    readTimeMinutes: 11,
    summary: 'Bài thơ khắc họa bức tượng đài bi tráng về người nghệ sĩ vĩ đại Lor-ca mang khát vọng cách tân nghệ thuật bị chế độ phát xít sát hại, qua đó ngợi ca sức sống bất diệt của cái Đẹp và tự do.',
    context: 'Rút từ tập thơ "Khối vuông ru-bích" (1985). Sáng tác năm 1979, lấy cảm hứng từ cuộc đời bi tráng của Phê-đê-ri-cô Đê Ga-xi-a Lor-ca (1898 - 1936) - nhà thơ, nhà soạn kịch thiên tài của Tây Ban Nha bị phát xít Franco bắn chết dã man.',
    authorAesthetics: 'Thanh Thảo kết hợp tinh hoa của thơ tượng trưng, siêu thực phương Tây với nhạc cảm tinh tế của tâm hồn Việt Nam, tạo nên cấu trúc thơ đa thanh, đa tầng nghĩa độc đáo.',
    mainThemes: [
      'Hình tượng Lor-ca - người nghệ sĩ dũng cảm chiến đấu vì nghệ thuật và tự do',
      'Cái chết bi thảm và nỗi xót xa vô hạn trước sự tàn bạo của chế độ phát xít',
      'Sự bất tử của tiếng đàn ghi-ta và khát vọng cách tân nghệ thuật không gì dập tắt nổi'
    ],
    keyAnalysis: [
      {
        heading: 'Chân dung Lor-ca trên nền văn hóa Tây Ban Nha và bi kịch cô đơn',
        content: 'Mở đầu bài thơ là chuỗi âm thanh "li-la li-la li-la" mô phỏng tiếng đàn ghi ta và loài hoa đinh hương tím. "Áo choàng đỏ gắt" gợi liên tưởng đến đấu trường bò tót khốc liệt - biểu tượng văn hóa Tây Ban Nha, đồng thời gợi bầu không khí chính trị ngột ngạt của chủ nghĩa phát xít. Người nghệ sĩ mang khát vọng tự do bước đi cô độc trên hành trình cách tân nghệ thuật.',
        evidence: '"Những tiếng đàn bọt nước / Tây Ban Nha áo choàng đỏ gắt / li-la li-la li-la / đi lang thang về miền đơn độc..."',
        literaryCommentary: 'Thanh Thảo sử dụng thi pháp tượng trưng siêu thực độc đáo: tiếng đàn được hữu hình hóa thành "bọt nước" mong manh mà kỳ ảo.'
      },
      {
        heading: 'Cái chết bi tráng và sự biến hóa của tiếng đàn ghi-ta',
        content: 'Bọn phát xít đã sát hại Lor-ca một cách dã man, nhưng tiếng đàn ghi-ta của chàng không chết mà biến hóa thành muôn vàn hình sắc: màu nâu của vỏ đàn và đất mẹ, màu lá xanh của hy vọng tuổi trẻ, bọt nước vỡ tan của nỗi đau và "tiếng ghi-ta ròng ròng máu chảy" - nỗi đau quằn quại của một sinh mệnh nghệ thuật.',
        evidence: '"tiếng ghi-ta nâu / bầu trời cô gái ấy / tiếng ghi-ta lá xanh biết mấy / tiếng ghi-ta tròn bọt nước vỡ tan / tiếng ghi-ta ròng ròng máu chảy"',
        literaryCommentary: 'Nghệ thuật ẩn dụ chuyển đổi cảm giác đạt đến đỉnh cao: âm thanh được sờ nắn, nhìn ngắm và cảm nhận bằng tất cả nỗi xót xa tột cùng.'
      },
      {
        heading: 'Sự bất tử của tiếng đàn và cuộc giải thoát thanh thản',
        content: '"Không ai chôn cất tiếng đàn / Tiếng đàn như cỏ mọc hoang": Thanh Thảo xót xa trước việc nghệ thuật bị lãng quên, nhưng khẳng định nghệ thuật của Lor-ca sẽ tự sinh sôi mãnh liệt như cỏ dại. Lor-ca bơi sang ngang dòng sông trên chiếc ghi-ta màu bạc, ném lá bùa và trái tim vào lặng yên bất chợt - cuộc giải thoát nhẹ nhõm, hòa vào cõi bất tử vĩnh hằng.',
        evidence: '"không ai chôn cất tiếng đàn / tiếng đàn như cỏ mọc hoang / giọt nước mắt vầng trăng / long lanh trong đáy giếng"',
        literaryCommentary: 'Một triết lý nhân sinh cao cả: bạo lực có thể tiêu diệt thể xác người nghệ sĩ nhưng không thể nào vùi dập được tiếng đàn tự do muôn đời.'
      }
    ],
    scholarlyQuotes: [
      {
        critic: 'Nhà phê bình Chu Văn Sơn',
        quote: 'Thanh Thảo đã viết về Lor-ca bằng một niềm thấu cảm sâu sắc đến tận cùng bản thể. Đàn ghi ta của Lor-ca là một khúc tưởng niệm thiêng liêng và lộng lẫy về cái Đẹp.'
      }
    ],
    quotes: [
      'Những tiếng đàn bọt nước / Tây Ban Nha áo choàng đỏ gắt / li-la li-la li-la / đi lang thang về miền đơn độc',
      'Tây Ban Nha / hát nghêu ngao / bỗng kinh hoàng / áo choàng bê bết đỏ / Lor-ca bị đi giải / về bãi bắn',
      'tiếng ghi-ta nâu / bầu trời cô gái ấy / tiếng ghi-ta lá xanh biết mấy / tiếng ghi-ta tròn bọt nước vỡ tan / tiếng ghi-ta ròng ròng máu chảy',
      'không ai chôn cất tiếng đàn / tiếng đàn như cỏ mọc hoang / giọt nước mắt vầng trăng / long lanh trong đáy giếng',
      'chàng ném lá bùa vào xoáy nước / chàng ném trái tim mình / vào lặng yên bất chợt / li-la li-la li-la...'
    ],
    artisticValues: [
      'Thi pháp tượng trưng siêu thực độc đáo, hình ảnh thơ giàu sức gợi và tính đa nghĩa',
      'Nghệ thuật liên kết âm nhạc và thi ca: điệp âm li-la ngân vang như dây đàn guitar',
      'Thể thơ không vần, không dấu chấm phẩy, dòng thơ tuôn trào theo dòng cảm xúc nội tâm',
      'Nghệ thuật ẩn dụ chuyển đổi cảm giác tài tình, tạo nên những thi ảnh ám ảnh tâm can'
    ],
    essayOutline: {
      introduction: 'Giới thiệu nhà thơ Thanh Thảo - ngòi bút cách tân thi pháp tiêu biểu. Giới thiệu thi phẩm "Đàn ghi ta của Lor-ca" (1979) và hình tượng Lor-ca - người nghệ sĩ tự do bất tử.',
      body: [
        '1. Khái quát chung: Bối cảnh đất nước Tây Ban Nha dưới ách phát xít và chân dung Lor-ca.',
        '2. Luận điểm 1: Hình ảnh Lor-ca trên nền văn hóa Tây Ban Nha và số phận cô độc của người nghệ sĩ tiên phong (khổ 1).',
        '3. Luận điểm 2: Cái chết bi thảm và sự tàn bạo của chế độ độc tài (khổ 2).',
        '4. Luận điểm 3: Sự thăng hoa và biến ảo của âm thanh tiếng đàn ghi-ta qua các gam màu và cảm giác (khổ 3).',
        '5. Luận điểm 4: Sự bất tử của tiếng đàn "như cỏ mọc hoang" và sự giải thoát thanh thản của Lor-ca (khổ 4, 5, 6).',
        '6. Đánh giá nét đặc sắc về nghệ thuật tượng trưng siêu thực và cấu trúc âm nhạc giao hưởng.'
      ],
      conclusion: 'Khẳng định giá trị tác phẩm: Bản trường ca tưởng niệm xúc động, ca ngợi sức sống bất diệt của nghệ thuật và khát vọng tự do của con người.',
      bonusPoints: 'Phân tích di chúc của Lor-ca: "Khi tôi chết hãy chôn tôi với cây đàn ghi-ta" để thấy được sự thấu cảm sâu sắc của Thanh Thảo.'
    },
    examPrompts: [
      'Cảm nhận về hình tượng tiếng đàn ghi-ta trong bài thơ "Đàn ghi ta của Lor-ca" của Thanh Thảo.',
      'Phân tích bi kịch và sự bất tử của người nghệ sĩ Lor-ca qua đoạn thơ: "tiếng ghi-ta nâu... li-la li-la li-la".',
      'Nét đặc sắc trong thi pháp tượng trưng, siêu thực của bài thơ Đàn ghi ta của Lor-ca.'
    ],
    keywords: [
      'Lor-ca',
      'Tiếng đàn bọt nước',
      'Áo choàng đỏ gắt',
      'Li-la li-la',
      'Ròng ròng máu chảy',
      'Như cỏ mọc hoang',
      'Chiếc ghi-ta màu bạc',
      'Tượng trưng siêu thực'
    ],
    audioText: 'Đàn ghi ta của Lor-ca của Thanh Thảo là khúc tráng ca xúc động về tự do và nghệ thuật. Dù bị bạo lực phát xít sát hại, tiếng đàn của Lor-ca vẫn bất tử như cỏ dại, ngân vang khúc ca li-la muôn đời trong lòng nhân loại.'
  },
  {
    id: 'vo-chong-a-phu',
    title: 'Vợ chồng A Phủ',
    author: 'Tô Hoài',
    authorBio: 'Tô Hoài (1920 - 2014), tên khai sinh Nguyễn Sen, quê ở làng Nghĩa Đô, Cầu Giấy, Hà Nội. Là cây đại thụ của văn xuôi hiện đại Việt Nam với gần 200 đầu sách. Ông có vốn sống vô cùng phong phú, tài quan sát phong tục sắc sảo và biệt tài miêu tả tâm lý nhân vật bậc thầy.',
    year: '1952',
    genre: 'truyen',
    genreName: 'Truyện',
    tag: 'Văn xuôi kháng chiến',
    readTimeMinutes: 16,
    summary: 'Bức tranh hiện thực đen tối về số phận cay đắng của người dân lao động vùng cao Tây Bắc dưới ách áp bức tàn bạo của phong kiến thực dân, và sự trỗi dậy diệu kỳ của sức sống tiềm tàng, khát vọng tự do của Mị và A Phủ.',
    context: 'Sáng tác năm 1952, kết quả chuyến đi thực tế kéo dài 8 tháng cùng bộ đội giải phóng Tây Bắc của Tô Hoài. Tác phẩm in trong tập "Truyện Tây Bắc" - tác phẩm đạt giải Nhất Hội Văn nghệ Việt Nam 1954 - 1955.',
    authorAesthetics: 'Tô Hoài luôn nhìn con người ở bề sâu nội tâm và sức sống nội sinh mãnh liệt. Ông tin rằng dưới lớp tro tàn của sự áp bức đày đọa, ngọn lửa của khát vọng sống và tự do không bao giờ lụi tàn.',
    mainThemes: [
      'Bản cáo trạng đanh thép tố cáo tội ác tàn bạo của bọn chúa đất phong kiến và thần quyền miền núi',
      'Số phận bi kịch đầy nước mắt của người phụ nữ vùng cao Tây Bắc kiếp dâu gạt nợ',
      'Sức sống tiềm tàng và khát vọng tự do không gì dập tắt nổi của nhân vật Mị',
      'Con đường giác ngộ cách mạng từ tự phát đấu tranh đến tự giác đứng lên cầm súng giải phóng quê hương'
    ],
    keyAnalysis: [
      {
        heading: 'Bi kịch làm dâu gạt nợ và sự tê liệt tinh thần của Mị',
        content: 'Mị từng là một cô gái H’mông xinh đẹp, hiếu thảo, tài hoa có tài thổi lá hay như thổi khèn, được bao chàng trai theo đuổi. Nhưng vì món nợ truyền kiếp của cha mẹ, Mị bị bắt về làm dâu gạt nợ nhà thống lí Pá Tra. Tại đây, Mị bị bóc lột sức lao động tàn nhẫn như trâu ngựa ("Con ngựa, con trâu làm còn có lúc, đêm nó còn được đứng gãi chân... đàn bà con gái nhà này thì vùi vào việc cả đêm lẫn ngày"). Đau đớn hơn, Mị bị tê liệt về tinh thần: "lùi lũi như con rùa nuôi trong xó cửa". Căn buồng Mị nằm kín mít, chỉ có chiếc cửa sổ lỗ vuông bằng bàn tay trông ra chỉ thấy mờ mờ trăng trắng không biết là sương hay là nắng - biểu tượng cho ngục thất giam hãm tuổi thanh xuân.',
        evidence: '"Ai ở xa về, thấy một cô gái ngồi quay sợi gai bên tảng đá trước cửa, cạnh tàu ngựa... lúc nào cũng cúi mặt, mặt buồn rười rượi."',
        literaryCommentary: 'Nghệ thuật miêu tả tương phản: hình ảnh cô gái trẻ ngồi cạnh tảng đá và chuồng ngựa lạnh lùng tố cáo sự tước đoạt nhân phẩm con người của chế độ phong kiến miền núi.'
      },
      {
        heading: 'Sức sống tiềm tàng trỗi dậy mãnh liệt trong đêm tình mùa xuân',
        content: 'Mùa xuân về Hồng Ngài với gió rét, cỏ gianh vàng ửng và sắc váy hoa xòe như bướm. Tiếng sáo gọi bạn tình bay lơ lửng ngoài đường cùng hơi men rượu ngày Tết đã đánh thức phần người tưởng chừng đã chết trong Mị. Mị lẩm nhẩm bài hát sáo, nhớ về quá khứ và ý thức lại quyền sống của bản thân: "Mị thấy phơi phới trở lại, trong lòng đột nhiên vui sướng như những đêm Tết ngày trước. Mị trẻ lắm. Mị vẫn còn trẻ. Mị muốn đi chơi!". Dù bị A Sử tàn nhẫn trói đứng vào cột nhà bằng thúng sợi đay, tóc bị quấn lên xà nhà, thân xác đau đớn tê dại nhưng tâm hồn Mị vẫn bay theo tiếng sáo rập rờn.',
        evidence: '"Mị thấy phơi phới trở lại, trong lòng đột nhiên vui sướng như những đêm Tết ngày trước. Mị trẻ lắm. Mị vẫn còn trẻ. Mị muốn đi chơi."',
        literaryCommentary: 'Diễn biến tâm lý được miêu tả chân thực, tinh tế theo quy luật: ngoại cảnh tác động -> hồi ức thức dậy -> nhận thức bừng sáng -> hành động nổi loạn.'
      },
      {
        heading: 'Hành động cởi trói cứu A Phủ và tự giải thoát cuộc đời mình',
        content: 'Trong đêm đông lạnh giá, ngọn lửa sưởi ấm dẫn Mị nhìn thấy "dòng nước mắt lấp lánh rớt xuống hai hõm má đã xám đen lại của A Phủ". Từ chỗ dửng dưng vô cảm, Mị bừng tỉnh lòng trắc ẩn: nhớ lại mình từng bị trói đứng, nhận ra sự phi lý tàn độc của nhà Pá Tra: "Trời ơi, nó bắt trói đứng người ta đến chết...". Tình thương người đã chiến thắng nỗi sợ hãi cái chết. Mị rút dao cắt đứt dây mây cứu A Phủ. Sau giây phút đứng lặng trong bóng tối, bản năng sinh tồn và khát vọng tự do đã giục giã đôi chân Mị băng qua màn đêm đuổi theo A Phủ: "A Phủ cho tôi đi với! Ở đây thì chết mất!". Hành động tự giải thoát mở ra bước ngoặt cuộc đời tại Phiềng Sa.',
        evidence: '"Mị đứng lặng trong bóng tối. Rồi Mị cũng vụt chạy. Trời tối lắm. Nhưng Mị vẫn băng đi. Mị đuổi kịp A Phủ, đã lăn, chạy, chạy xuống tới lưng dốc..."',
        literaryCommentary: 'Giá trị nhân đạo đạt đỉnh cao: con người lao động bị đày đọa đã tự tay bẻ gãy gông cùm nô lệ để bước ra ánh sáng của tự do và cách mạng.'
      }
    ],
    scholarlyQuotes: [
      {
        critic: 'Nhà phê bình Phan Cự Đệ',
        quote: 'Vợ chồng A Phủ là kiệt tác của văn xuôi hiện thực cách mạng. Tô Hoài đã khám phá ra sức sống quật khởi phi thường của đồng bào Tây Bắc đằng sau vẻ ngoài cam chịu lầm lũi.'
      },
      {
        critic: 'Nhà văn Nguyên Ngọc',
        quote: 'Tô Hoài hiểu phong tục và tâm hồn người H’mông như chính da thịt của mình. Nhân vật Mị là một trong những tượng đài phụ nữ bất hủ nhất của văn học hiện đại.'
      }
    ],
    quotes: [
      'Ai ở xa về, thấy một cô gái ngồi quay sợi gai bên tảng đá trước cửa, cạnh tàu ngựa... lúc nào cũng cúi mặt, mặt buồn rười rượi.',
      'Ở cái buồng Mị nằm, kín mít, có một chiếc cửa sổ một lỗ vuông bằng bàn tay. Lúc nào trông ra cũng chỉ thấy trăng trắng, không biết là sương hay là nắng.',
      'Mỗi ngày Mị càng không nói, lùi lũi như con rùa nuôi trong xó cửa.',
      'Mị thấy phơi phới trở lại, trong lòng đột nhiên vui sướng như những đêm Tết ngày trước. Mị trẻ lắm. Mị vẫn còn trẻ. Mị muốn đi chơi.',
      'Mị còn trẻ lắm. Mị vẫn còn trẻ. Mị muốn đi chơi. Bao nhiêu người có chồng cũng đi chơi ngày Tết...',
      'Mị đứng lặng trong bóng tối. Rồi Mị cũng vụt chạy. Trời tối lắm. Nhưng Mị vẫn băng đi. Mị đuổi kịp A Phủ...',
      'A Phủ cho tôi đi với! Ở đây thì chết mất!'
    ],
    artisticValues: [
      'Nghệ thuật xây dựng nhân vật bậc thầy: miêu tả tâm lý nội tâm tinh tế, diễn biến tâm trạng hợp lý sâu sắc',
      'Bút pháp trần thuật lôi cuốn, đậm đà sắc thái phong tục tập quán miền núi Tây Bắc',
      'Ngôn ngữ giàu chất tạo hình, chất thơ và nhịp điệu trữ tình lắng đọng',
      'Xây dựng các chi tiết nghệ thuật đắt giá mang ý nghĩa biểu tượng cao (tiếng sáo, ngọn lửa, căn buồng lỗ vuông)'
    ],
    essayOutline: {
      introduction: 'Giới thiệu Tô Hoài - cây đại thụ của văn xuôi hiện đại Việt Nam. Giới thiệu truyện ngắn "Vợ chồng A Phủ" (in trong tập "Truyện Tây Bắc" - 1952) và nhân vật Mị - biểu tượng cho sức sống kỳ diệu của người phụ nữ Tây Bắc.',
      body: [
        '1. Khái quát chung: Hoàn cảnh xuất thân xinh đẹp, hiếu thảo và bi kịch rơi vào bẫy nợ truyền kiếp của nhà thống lí Pá Tra.',
        '2. Luận điểm 1: Cuộc sống nô lệ đầy đọa và sự tê liệt tâm hồn của Mị tại nhà Pá Tra (kiếp làm dâu gạt nợ, lùi lũi như con rùa, căn buồng ô vuông mờ mờ).',
        '3. Luận điểm 2: Sức sống tiềm tàng hồi sinh trong đêm tình mùa xuân ở Hồng Ngài (tác động của cảnh sắc mùa xuân, tiếng sáo gọi bạn tình, men rượu ngày Tết, ý thức lại tuổi trẻ và hành động muốn đi chơi dù bị trói đứng).',
        '4. Luận điểm 3: Sức sống quật khởi trong đêm mùa đông (chứng kiến dòng nước mắt A Phủ, tình thương người vượt lên nỗi sợ hãi, cắt dây trói cứu A Phủ và tự giải thoát cuộc đời mình).',
        '5. Luận điểm 4: Đánh giá giá trị hiện thực (tố cáo tội ác bọn chúa đất) và giá trị nhân đạo sâu sắc (ca ngợi phẩm giá và chỉ ra con đường tự giải phóng theo cách mạng).',
        '6. Đánh giá nghệ thuật miêu tả tâm lý và ngôn ngữ trần thuật đậm đà phong vị Tây Bắc.'
      ],
      conclusion: 'Khẳng định giá trị tác phẩm: Bài ca bất tử về khát vọng tự do và phẩm giá con người lao động vùng cao Tây Bắc.',
      bonusPoints: 'So sánh sức sống tiềm tàng của Mị với nhân vật Thị trong "Vợ nhặt" của Kim Lân để khẳng định vẻ đẹp thiên tính nữ của người phụ nữ Việt Nam.'
    },
    examPrompts: [
      'Phân tích diễn biến tâm lý và hành động của nhân vật Mị trong đêm tình mùa xuân ở Hồng Ngài (truyện ngắn "Vợ chồng A Phủ" - Tô Hoài).',
      'Phân tích sức sống tiềm tàng của nhân vật Mị qua hành động cắt dây trói cứu A Phủ và tự giải phóng cuộc đời mình trong đêm mùa đông.',
      'Cảm nhận giá trị nhân đạo sâu sắc của tác phẩm "Vợ chồng A Phủ" qua cuộc đời và số phận nhân vật Mị.'
    ],
    keywords: [
      'Dâu gạt nợ',
      'Lùi lũi con rùa',
      'Buồng lỗ vuông',
      'Tiếng sáo gọi bạn',
      'Đêm tình mùa xuân',
      'Phơi phới trở lại',
      'Dòng nước mắt A Phủ',
      'Cởi trói cứu người',
      'Khát vọng tự do',
      'Sức sống tiềm tàng'
    ],
    audioText: 'Vợ chồng A Phủ của Tô Hoài là áng văn xuôi kiệt tác về đề tài Tây Bắc. Bằng ngòi bút am hiểu phong tục sâu sắc và nghệ thuật phân tích tâm lý tài tình, nhà văn đã khẳng định chân lý: dù bị vùi dập đến tận cùng đau khổ, ngọn lửa của khát vọng sống và tự do trong tâm hồn con người lao động không bao giờ bị dập tắt.'
  },
  {
    id: 'vo-nhat',
    title: 'Vợ nhặt',
    author: 'Kim Lân',
    authorBio: 'Kim Lân (1920 - 2007), tên thật Nguyễn Văn Tài, quê ở làng Phù Lưu, xã Tân Hồng, thị xã Từ Sơn, Bắc Ninh. Là nhà văn một lòng đi về với "đất, với người, với thuần hậu nguyên thủy của nông thôn Việt Nam". Văn phong giản dị, mộc mạc mà hóm hỉnh, thấu hiểu sâu sắc tâm tư của những người nông dân cùng khổ.',
    year: '1954',
    genre: 'truyen',
    genreName: 'Truyện',
    tag: 'Truyện ngắn hiện thực',
    readTimeMinutes: 15,
    summary: 'Tác phẩm khắc họa tình huống trớ trêu khi anh cu Tràng nghèo khó "nhặt" được vợ giữa nạn đói kinh hoàng năm 1945, qua đó làm bừng sáng vẻ đẹp của tình người, tình mẫu tử và khát vọng sống hướng về ánh sáng cách mạng.',
    context: 'Bắt nguồn từ bản thảo tiểu thuyết "Xóm ngụ cư" viết dở sau Cách mạng tháng Tám 1945. Sau khi hòa bình lập lại (1954), Kim Lân nhớ lại cốt truyện cũ và viết lại thành truyện ngắn hoàn chỉnh "Vợ nhặt", in trong tập "Con chó xấu xí" (1962). Bối cảnh tác phẩm là thảm họa nạn đói năm Ất Dậu 1945 khiến hơn 2 triệu đồng bào ta chết đói.',
    authorAesthetics: 'Kim Lân tâm sự: "Khi viết về nạn đói, ý đồ của tôi không phải là miêu tả cái đói để gieo rắc sự tuyệt vọng, mà là để khẳng định: trong bất kỳ hoàn cảnh khốn cùng nào, con người Việt Nam vẫn khao khát sống, cưu mang đùm bọc lẫn nhau và hướng về tương lai."',
    mainThemes: [
      'Bức tranh hiện thực đen tối, thê thảm về nạn đói lịch sử năm 1945',
      'Tình huống nhặt vợ độc đáo và ý nghĩa nhân bản sâu sắc',
      'Sự đổi thay kỳ diệu trong tâm lý và số phận của Tràng, Thị và bà cụ Tứ',
      'Niềm tin bất diệt vào cuộc sống, tổ ấm gia đình và con đường đổi đời đi theo cách mạng'
    ],
    keyAnalysis: [
      {
        heading: 'Bối cảnh nạn đói năm 1945 và tình huống "nhặt vợ" độc đáo',
        content: 'Kim Lân mở đầu bằng không gian xóm ngụ cư tang tóc: bóng tối của sự chết chóc bủa vây, người chết như ngả rạ, mùi ẩm mốc của rác rưởi và mùi gây của xác người nồng nặc, bầy quạ đen lượn từng đàn như những đám mây đen tang tóc. Giữa ranh giới sống chết mong manh, anh cu Tràng thô kệch, nghèo khó, ngụ cư lại "nhặt" được vợ chỉ bằng bốn bát bánh đúc và vài câu hò bông đùa giữa chợ. Tình huống truyện vừa bi vừa hài, gây ngỡ ngàng cho cả xóm ngụ cư, bà cụ Tứ và chính bản thân Tràng.',
        evidence: '"Cái đói đã tràn đến xóm này tự lúc nào... Người chết như ngả rạ. Không buổi sáng nào người trong làng đi chợ không gặp ba bốn cái thây nằm còng queo bên đường."',
        literaryCommentary: 'Nghệ thuật xây dựng tình huống truyện bậc thầy: nhặt một con người như nhặt cành cây ngọn cỏ ngoài đường, phản ánh số phận rẻ mạt của con người trong nạn đói nhưng mở ra sự hồi sinh của tình người.'
      },
      {
        heading: 'Sự biến chuyển tâm lý kỳ diệu của nhân vật Tràng và Thị',
        content: 'Tràng từ một gã trai thô kệch, ngờ nghệch bỗng thấy mình trưởng thành: "Trong lòng hắn dấy lên một tình thương yêu gắn bó lạ lùng... Hắn thấy hắn có bổn phận phải chăm lo cho gia đình". Thị từ người đàn bà chao chát, chỏng lỏn vì đói khát bỗng trở về đúng thiên tính nữ: hiền hậu, đúng mực người vợ hiền dâu thảo quét dọn nhà cửa gọn gàng. Tình yêu thương và tổ ấm gia đình đã rửa sạch mọi bụi bặm của nghèo đói.',
        evidence: '"Tràng nhìn thị, trong lòng dấy lên một tình thương yêu gắn bó lạ lùng. Hắn thấy hắn có bổn phận phải chăm lo cho gia đình..."',
        literaryCommentary: 'Sức mạnh hồi sinh kỳ diệu của tình người: hơi ấm gia đình đã sưởi ấm những tâm hồn cô đơn, đánh thức phẩm giá lương thiện bị cái đói vùi dập.'
      },
      {
        heading: 'Tấm lòng nhân hậu, bao dung của người mẹ nghèo - Bà cụ Tứ',
        content: 'Bà cụ Tứ bước vào truyện với dáng đi lòng khòm và tâm trạng ngổn ngang "vừa mừng vừa tủi". Bà thương cho con trai, xót xa cho người con dâu xa lạ: "Người ta có gặp bước khó khăn này người ta mới lấy đến con mình...". Bữa cơm đón dâu thảm hại chỉ có bát cháo cám chát đắng ("chè khoán ngon đáo để"), nhưng ngập tràn tiếng cười và câu chuyện về tương lai: nuôi gà, làm ăn. Hình ảnh lá cờ đỏ sao vàng trên đê Sộp ở cuối truyện hé mở con đường cách mạng tất yếu.',
        evidence: '"Bà lão cúi đầu nín lặng. Bà lão hiểu rồi. Lòng người mẹ nghèo khổ ấy còn hiểu ra biết bao nhiêu cơ sự, vừa ai oán vừa xót thương cho số kiếp đứa con mình."',
        literaryCommentary: 'Tượng đài người mẹ Việt Nam nghèo khó mà bao dung, nhân hậu: bà gieo vào lòng các con niềm tin mãnh liệt: "Ai giàu ba họ, ai khó ba đời".'
      }
    ],
    scholarlyQuotes: [
      {
        critic: 'Nhà văn Tô Hoài',
        quote: 'Vợ nhặt là truyện ngắn xuất sắc nhất viết về nạn đói năm 1945. Kim Lân đã đặt nhân vật của mình vào tận cùng cái chết để khẳng định chân lý sống còn của tình người.'
      },
      {
        critic: 'GS. Trần Đăng Suyền',
        quote: 'Nét đặc sắc nhất của ngòi bút Kim Lân là tình cảm nhân đạo chân thực, sâu sắc bắt nguồn từ sự thấu hiểu máu thịt cuộc đời người nông dân Bắc Bộ.'
      }
    ],
    quotes: [
      'Cái đói đã tràn đến xóm này tự lúc nào... xanh xám như những bóng ma, và nằm ngổn ngang khắp lều chợ.',
      'Có ăn gì thì ăn, chả ăn giầu... Thị cắm đầu ăn một chặp bốn bát bánh đúc liền chẳng chuyện trò gì.',
      'Tràng nhìn thị, trong lòng dấy lên một tình thương yêu gắn bó lạ lùng. Hắn thấy hắn có bổn phận phải chăm lo cho gia đình...',
      'Bà lão cúi đầu nín lặng. Bà lão hiểu rồi... Nghĩ vừa ai oán vừa xót thương cho số kiếp đứa con mình.',
      'Bữa cơm ngày đói trông thật thảm hại... Bà cụ Tứ bưng lên một nồi bốc khói nghi ngút: Chè khoán đây, ngon đáo để, cứ thử ăn mà xem!',
      'Trong óc Tràng vẫn thấy hiện ra cảnh những người nghèo đói ầm ầm kéo nhau đi trên đê Sộp, đằng trước có lá cờ đỏ to lớn phấp phới...'
    ],
    artisticValues: [
      'Nghệ thuật xây dựng tình huống truyện độc đáo, éo le, giàu sức chứa tư tưởng hiện thực và nhân đạo',
      'Nghệ thuật miêu tả tâm lý nhân vật mộc mạc, chân thực, xúc động đến rơi nước mắt',
      'Ngôn ngữ trần thuật đậm đà khẩu ngữ nông thôn đồng bằng Bắc Bộ',
      'Nghệ thuật đối lập giữa cái chết và sự sống, giữa bóng tối nạn đói và ánh sáng tương lai'
    ],
    essayOutline: {
      introduction: 'Giới thiệu Kim Lân - nhà văn của làng quê Việt Nam. Nêu xuất xứ truyện ngắn "Vợ nhặt" viết về bối cảnh nạn đói 1945 và khẳng định giá trị tác phẩm: bài ca ngợi ca tình người và khát vọng sống.',
      body: [
        '1. Bối cảnh không gian nạn đói và tình huống nhặt vợ độc đáo (ý nghĩa bi - hài của nhan đề tác phẩm).',
        '2. Sự hồi sinh trong tâm lý nhân vật Tràng (từ gã trai thô kệch trở thành người đàn ông có trách nhiệm với gia đình).',
        '3. Sự biến chuyển của nhân vật Thị (từ người đàn bà chao chát vì miếng ăn trở thành người vợ hiền thảo, đảm đang).',
        '4. Tấm lòng nhân hậu, vị tha và đức hy sinh của bà cụ Tứ qua diễn biến tâm trạng "vừa mừng vừa tủi".',
        '5. Bữa cơm ngày đón dâu mới và chi tiết nồi chè khoán (cháo cám chát đắng nhưng ấm áp tình người).',
        '6. Hình ảnh lá cờ đỏ sao vàng ở cuối truyện - biểu tượng con đường cứu sống số phận những con người khốn cùng.',
        '7. Đánh giá nét đặc sắc về nghệ thuật xây dựng tình huống và ngôn ngữ trần thuật.'
      ],
      conclusion: 'Khẳng định giá trị nhân đạo cao cả: Con người Việt Nam không bao giờ đầu hàng số phận mà luôn cưu mang, sưởi ấm cho nhau và hướng về sự sống.',
      bonusPoints: 'Liên hệ với triết lý của Nam Cao trong "Chí Phèo" để làm nổi bật nét riêng của Kim Lân trong việc nhìn nhận bản chất lương thiện của người nông dân.'
    },
    examPrompts: [
      'Phân tích diễn biến tâm trạng nhân vật bà cụ Tứ trong truyện ngắn "Vợ nhặt" của nhà văn Kim Lân.',
      'Phân tích tình huống truyện độc đáo trong tác phẩm "Vợ nhặt" và ý nghĩa nhân đạo sâu sắc của tình huống đó.',
      'Cảm nhận về chi tiết bữa cơm ngày đói với nồi chè khoán ở phần cuối truyện ngắn Vợ nhặt.'
    ],
    keywords: [
      'Tình huống nhặt vợ',
      'Bốn bát bánh đúc',
      'Bà cụ Tứ',
      'Nồi cháo cám',
      'Tình thương gắn bó',
      'Lá cờ đỏ sao vàng',
      'Nạn đói 1945',
      'Khát vọng sống',
      'Sự hồi sinh'
    ],
    audioText: 'Vợ nhặt của Kim Lân là bài ca cảm động rơi nước mắt về tình người giữa bóng đen nạn đói năm 1945. Bằng tấm lòng nhân đạo cao cả, nhà văn khẳng định: khi cận kề cái chết, con người Việt Nam không nghĩ đến sự diệt vong mà nắm lấy tay nhau, hướng về tổ ấm gia đình và bình minh tương lai.'
  },
  {
    id: 'chiec-thuyen-ngoai-xa',
    title: 'Chiếc thuyền ngoài xa',
    author: 'Nguyễn Minh Châu',
    authorBio: 'Nguyễn Minh Châu (1930 - 1989), quê ở làng Thơi, xã Quỳnh Hải, huyện Quỳnh Lưu, Nghệ An. Được mệnh danh là "người mở đường tinh anh và tài năng nhất" của văn học Việt Nam thời kỳ đổi mới. Ngòi bút của ông luôn trăn trở về số phận con người, bản chất nghệ thuật và thiên chức của người cầm bút trong đời sống hòa bình.',
    year: '1983',
    genre: 'truyen',
    genreName: 'Truyện',
    tag: 'Văn xuôi đổi mới',
    readTimeMinutes: 16,
    summary: 'Chuyến đi săn ảnh nghệ thuật của Phùng tại vùng biển miền Trung mở ra những nghịch lý nhức nhối giữa cái đẹp toàn bích của nghệ thuật và hiện thực trần trụi của cuộc đời, qua đó đặt ra bài học nhận thức đa diện, nhiều chiều về con người thời hậu chiến.',
    context: 'Sáng tác tháng 8/1983, in lần đầu trong tập "Bến quê" (1985), sau đó đưa vào tập truyện ngắn cùng tên "Chiếc thuyền ngoài xa" (1987). Tác phẩm đánh dấu bước ngoặt tư duy tự sự từ cảm hứng sử thi sang cảm hứng thế sự - đời tư.',
    authorAesthetics: 'Nguyễn Minh Châu quan niệm: "Thiên chức của nhà văn là suốt đời đi tìm hạt ngọc ẩn giấu trong bề sâu tâm hồn con người". Nghệ thuật chân chính không được là ánh trăng lừa dối mà phải gắn liền với nỗi đau và hiện thực đời sống.',
    mainThemes: [
      'Mối quan hệ phức tạp, đa chiều giữa nghệ thuật lãng mạn và hiện thực cuộc sống lam lũ',
      'Cái nhìn đa diện, sâu sắc về thân phận con người và bi kịch gia đình thời hậu chiến',
      'Vẻ đẹp khuất lấp của tình mẫu tử thiêng liêng và sự thấu hiểu lẽ đời của người đàn bà hàng chài',
      'Trách nhiệm đạo đức và lương tâm nghề nghiệp của người nghệ sĩ cầm máy'
    ],
    keyAnalysis: [
      {
        heading: 'Hai phát hiện mang tính bước ngoặt của nghệ sĩ nhiếp ảnh Phùng',
        content: 'Phát hiện thứ nhất: Sau nhiều ngày phục kích, Phùng chụp được bức ảnh chiếc thuyền ngoài xa trong sương sớm đẹp như "bức tranh mực tàu của một danh họa thời cổ" - một vẻ đẹp toàn bích khiến người nghệ sĩ cảm thấy tâm hồn mình được thanh lọc, ngỡ như khám phá thấy "đạo đức của cái đẹp". Phát hiện thứ hai: Ngay khi chiếc thuyền cập bờ, bước ra khỏi cái đẹp ấy là cảnh bạo lực gia đình tàn bạo: người chồng vũ phu quất thắt lưng tới tấp vào lưng người vợ, đứa con Phác lao vào bảo vệ mẹ bằng sự căm hận người cha. Cái đẹp bên ngoài đã che giấu sự thật đau đớn, nhức nhối phía sau.',
        evidence: '"Chẳng biết ai đó còn ví cái đẹp là đạo đức... tôi tưởng chính mình vừa khám phá thấy cái chân lý của sự toàn thiện... Ngay lúc ấy, chiếc thuyền đâm thẳng vào bờ... Người đàn ông rút chiếc thắt lưng, vừa quất tới tấp vừa thở hồng hộc..."',
        literaryCommentary: 'Một tình huống nhận thức sắc sảo: cảnh tỉnh người nghệ sĩ không được nhìn cuộc đời qua lăng kính lãng mạn xuôi chiều từ xa, mà phải dấn thân nhìn thẳng vào vết thương hiện thực.'
      },
      {
        heading: 'Câu chuyện của người đàn bà hàng chài ở tòa án huyện và vẻ đẹp khuất lấp',
        content: 'Tại tòa án huyện, chánh án Đẩu và Phùng khuyên người đàn bà bỏ chồng. Chị chắp tay van xin: "Quý tòa bắt tội con cũng được... chứ đừng bắt con bỏ nó". Người đàn bà quê mùa lam lũ đã dạy cho hai người đàn ông trí thức một bài học sâu sắc về cuộc đời: cuộc sống trên biển cần một người đàn ông chèo chống lúc phong ba; và hơn hết là tình mẫu tử thiêng liêng: "đàn bà ở thuyền chúng con phải sống cho con chứ không thể sống cho mình". Ẩn sau vẻ thô kệch là sự bao dung, đức hy sinh và cái nhìn thấu suốt lẽ đời.',
        evidence: '"Quý tòa bắt tội con cũng được, phạt tù con cũng được, đừng bắt con bỏ nó... Đàn bà ở thuyền chúng con phải sống cho con chứ không thể sống cho mình như ở trên đất được..."',
        literaryCommentary: 'Hạt ngọc ẩn giấu trong tâm hồn con người: người đàn bà vô danh ấy chính là hiện thân cho đức hy sinh vĩ đại của người mẹ Việt Nam nghèo khó.'
      },
      {
        heading: 'Ý nghĩa triết lý sâu sắc của tấm ảnh trong bộ lịch năm ấy',
        content: 'Tấm ảnh của Phùng được chọn in trong bộ lịch năm ấy được nhiều người sành nghệ thuật khen ngợi. Nhưng mỗi khi nhìn kỹ bức ảnh đen trắng tĩnh lặng, Phùng luôn thấy hiện lên hai hình ảnh: "màu hồng hồng của ánh sương mai" (cái đẹp lãng mạn nghệ thuật) và "người đàn bà vùng biển cao lớn với những đường nét thô kệch bước ra khỏi tấm ảnh" (hiện thực nhọc nhằn của đời sống). Nghệ thuật chân chính không bao giờ được tách rời hiện thực cuộc đời.',
        evidence: '"Bao giờ tôi cũng thấy người đàn bà ấy đang bước ra khỏi tấm ảnh, đó là một người đàn bà vùng biển cao lớn với những đường nét thô kệch, tấm lưng áo bạc phếch có miếng vá..."',
        literaryCommentary: 'Thông điệp thẩm mỹ thời đại: Cái đẹp nghệ thuật chỉ thực sự có ý nghĩa khi nó hướng về con người và vì con người.'
      }
    ],
    scholarlyQuotes: [
      {
        critic: 'Nhà phê bình Lã Nguyên',
        quote: 'Chiếc thuyền ngoài xa là một tuyên ngôn nghệ thuật của Nguyễn Minh Châu về mối quan hệ giữa nghệ thuật và đời sống. Ông đòi hỏi người nghệ sĩ phải có cái nhìn đa diện, không đơn giản hóa số phận con người.'
      },
      {
        critic: 'GS. Huỳnh Như Phương',
        quote: 'Truyện ngắn của Nguyễn Minh Châu giàu sức trăn trở triết học. Ông đưa người đọc vượt qua vẻ đẹp bề ngoài để chạm vào những nghịch lý sâu xa của kiếp nhân sinh.'
      }
    ],
    quotes: [
      'Chẳng biết ai đó còn ví cái đẹp là đạo đức... tôi tưởng chính mình vừa khám phá thấy cái chân lý của sự toàn thiện, khám phá thấy cái khoảnh khắc trong ngần của tâm hồn.',
      'Ngay lúc ấy, chiếc thuyền đâm thẳng vào bờ... Người đàn ông rút chiếc thắt lưng của lính ngụy, vừa quất tới tấp vào lưng người đàn bà vừa thở hồng hộc, nghiến răng ken két...',
      'Quý tòa bắt tội con cũng được, phạt tù con cũng được, đừng bắt con bỏ nó...',
      'Đàn bà ở thuyền chúng con phải sống cho con chứ không thể sống cho mình như ở trên đất được...',
      'Cũng có khi biển động sóng gió, cả nhà phải ăn cây xương rồng luộc chấm muối...',
      'Vui nhất là lúc nhìn đàn con tôi chúng nó được ăn no...',
      'Bao giờ tôi cũng thấy người đàn bà ấy đang bước ra khỏi tấm ảnh, đó là một người đàn bà vùng biển cao lớn với những đường nét thô kệch, tấm lưng áo bạc phếch có miếng vá...'
    ],
    artisticValues: [
      'Nghệ thuật xây dựng tình huống nhận thức mang tính triết lý sâu sắc',
      'Ngôi kể thứ nhất (nhân vật Phùng) tạo điểm nhìn trần thuật khách quan, chân thực và giàu tính tự vấn',
      'Nghệ thuật khắc họa nhân vật qua hành động, lời thoại và thế giới nội tâm tinh tế',
      'Hệ thống hình ảnh biểu tượng đa tầng (chiếc thuyền ngoài xa, bức ảnh lịch, tấm lưng áo bạc phếch)'
    ],
    essayOutline: {
      introduction: 'Giới thiệu Nguyễn Minh Châu - ngòi bút tiên phong của văn học đổi mới. Giới thiệu truyện ngắn "Chiếc thuyền ngoài xa" và tư tưởng triết lý thẩm mỹ về mối quan hệ giữa nghệ thuật và cuộc đời.',
      body: [
        '1. Hai phát hiện mang tính đối lập của nghệ sĩ Phùng trên bờ biển miền Trung (cảnh đắt trời cho tuyệt mỹ và cảnh bạo lực gia đình trần trụi).',
        '2. Câu chuyện của người đàn bà hàng chài ở tòa án huyện và bài học nhận thức của Phùng và Đẩu (lý do không thể bỏ chồng, đức hy sinh vì con).',
        '3. Vẻ đẹp khuất lấp của người đàn bà hàng chài: tình mẫu tử thiêng liêng, sự bao dung và thấu hiểu lẽ đời sâu sắc.',
        '4. Nhân vật người chồng vũ phu và đứa con Phác - cái nhìn đa diện về nạn nhân của nghèo khổ và chiến tranh.',
        '5. Ý nghĩa biểu tượng của tấm ảnh trong bộ lịch cuối năm (màu hồng ánh sương mai và người đàn bà bước ra khỏi tấm ảnh).',
        '6. Đánh giá nét đặc sắc về nghệ thuật tự sự và thông điệp nhân đạo đổi mới của tác giả.'
      ],
      conclusion: 'Khẳng định giá trị tác phẩm: Lời nhắc nhở sâu sắc đối với người cầm bút - nghệ thuật chân chính phải gắn bó máu thịt với hiện thực đời sống con người.',
      bonusPoints: 'Liên hệ với quan niệm nghệ thuật của Nam Cao trong "Trăng sáng" ("Nghệ thuật không nên là ánh trăng lừa dối...") để đạt điểm 9.5.'
    },
    examPrompts: [
      'Phân tích hai phát hiện của người nghệ sĩ nhiếp ảnh Phùng trong truyện ngắn "Chiếc thuyền ngoài xa" của Nguyễn Minh Châu.',
      'Cảm nhận về vẻ đẹp khuất lấp của nhân vật người đàn bà hàng chài qua câu chuyện ở tòa án huyện trong truyện ngắn "Chiếc thuyền ngoài xa".',
      'Ý nghĩa biểu tượng của tấm ảnh được chọn trong bộ lịch năm ấy ở đoạn kết truyện ngắn Chiếc thuyền ngoài xa.'
    ],
    keywords: [
      'Nghệ thuật và cuộc đời',
      'Tình huống nhận thức',
      'Chiếc thuyền ngoài xa',
      'Ánh sương mai',
      'Tấm ảnh lịch',
      'Người đàn bà hàng chài',
      'Hạt ngọc ẩn giấu',
      'Tình mẫu tử',
      'Cái nhìn đa diện'
    ],
    audioText: 'Chiếc thuyền ngoài xa của Nguyễn Minh Châu là tác phẩm triết luận sâu sắc thời kỳ đổi mới. Qua hai phát hiện tương phản của nghệ sĩ Phùng, tác giả nhắc nhở chúng ta: đừng bao giờ nhìn cuộc đời một cách dễ dãi từ xa, nghệ thuật chân chính muôn đời phải gắn liền với nỗi đau và phẩm giá con người.'
  },
  {
    id: 'nguoi-lai-do-song-da',
    title: 'Người lái đò Sông Đà',
    author: 'Nguyễn Tuân',
    authorBio: 'Nguyễn Tuân (1910 - 1987), quê ở làng Mọc, nay thuộc phường Nhân Chính, quận Thanh Xuân, Hà Nội. Là một nghệ sĩ lớn, bậc thầy của ngôn từ và thể loại tùy bút trong nền văn học hiện đại Việt Nam. Phong cách nghệ thuật nổi bật với sự tài hoa, uyên bác, suốt đời tìm kiếm cái Đẹp ở dạng phi thường, tuyệt đỉnh.',
    year: '1960',
    genre: 'ky',
    genreName: 'Tùy bút',
    tag: 'Tùy bút Tây Bắc',
    readTimeMinutes: 15,
    summary: 'Khúc tráng ca trác tuyệt ca ngợi vẻ đẹp kỳ vĩ, hung bạo mà thơ mộng của thiên nhiên Tây Bắc, cùng chân dung "thứ vàng mười đã qua thử lửa" - người lao động lái đò dũng cảm, mưu trí và tài hoa như một người nghệ sĩ trên sông nước.',
    context: 'Kết quả chuyến đi thực tế gian khổ lên vùng cao Tây Bắc năm 1958 của Nguyễn Tuân. Ông lên đây không chỉ để chiêm ngưỡng cảnh sắc thiên nhiên mà quan trọng hơn là để tìm kiếm "thứ vàng mười trong tâm hồn" những con người lao động dựng xây đất nước mới. Tác phẩm in trong tập tùy bút "Sông Đà" (1960).',
    authorAesthetics: 'Sau cách mạng, ngòi bút Nguyễn Tuân chuyển hướng: cái Đẹp không còn ở quá khứ hay nơi cô độc mà nằm ngay trong cuộc sống lao động của nhân dân. Ông nhìn con người ở phương diện tài hoa nghệ sĩ, khám phá sự vật ở góc độ văn hóa thẩm mỹ.',
    mainThemes: [
      'Hình tượng dòng Sông Đà với hai nét tính cách đối lập: Hung bạo dữ dằn và Thơ mộng trữ tình',
      'Hình tượng ông lái đò - người anh hùng lao động, người nghệ sĩ tài hoa vượt thác ghềnh',
      'Tình yêu tha thiết, say đắm đối với giang sơn gấm vóc Tổ quốc Việt Nam'
    ],
    keyAnalysis: [
      {
        heading: 'Sông Đà - Bản tính hung bạo, dữ dằn như một loài thủy quái',
        content: 'Nguyễn Tuân mở đầu bằng lời đề từ mang cá tính kiên cường: "Chúng thủy giai đông tẩu / Đà giang độc bắc lưu". Sông Đà hung bạo ở vách đá nghẹt thở "chẹt lòng sông như một cái yết hầu", ghềnh Hát Loóng cuồn cuộn nước xô đá xô sóng gầm réo quanh năm, những cái hút nước quãng Tà Mường Vát xoáy tít như đáy giếng bê tông sẵn sàng nuốt chửng bè gỗ. Đỉnh cao của sự hung bạo là ba trùng vi thạch trận hiểm độc: thạch trận thứ nhất có bốn cửa tử một cửa sinh; thạch trận thứ hai tăng cửa tử, cửa sinh bố trí lệch sang bờ hữu; thạch trận thứ ba cửa sinh nằm ngay giữa bọn đá hậu vệ canh gác. Sông Đà hiện lên như một sinh thể có tâm địa nham hiểm, kẻ thù số một thách thức con người.',
        evidence: '"Đá ở đây từ ngàn năm vẫn mai phục hết trong lòng sông... Mặt hòn đá nào trông cũng ngỗ ngược, hằn học, dữ dằn... Nước thở và nằm nghe như tiếng một ngàn con trâu mộng đang lồng lộn giữa rừng vầu rừng nứa bị cháy..."',
        literaryCommentary: 'Vận dụng tri thức đa ngành: quân sự, võ thuật, điện ảnh, hội họa để biến cuộc vượt thác thành một trận thủy chiến tráng lệ.'
      },
      {
        heading: 'Sông Đà - Vẻ đẹp thơ mộng trữ tình đắm say',
        content: 'Đối lập với nét hung bạo là vẻ đẹp lãng mạn, thi vị. Nhìn từ trên máy bay, dòng sông mềm mại uốn lượn "như một áng tóc mun dài ngàn ngàn vạn vạn sải, đầu tóc chân tóc ẩn hiện trong mây trời Tây Bắc bung nở hoa ban hoa gạo". Màu nước sông Đà biến ảo theo mùa diệu kỳ: "Mùa xuân dòng xanh ngọc bích, chứ nước Sông Đà không xanh màu xanh canh hến của Sông Gâm Sông Lô. Mùa thu nước Sông Đà lừ lừ chín đỏ như một người bầm đi vì rượu bữa". Bờ sông hoang sơ, tĩnh mịch như một bờ tiền sử, đầy chất thơ gợi cảm.',
        evidence: '"Con Sông Đà tuôn dài tuôn dài như một áng tóc trữ tình, đầu tóc chân tóc ẩn hiện trong mây trời Tây Bắc bung nở hoa ban hoa gạo tháng hai..."',
        literaryCommentary: 'Bút pháp thi vị hóa tuyệt hảo: dòng sông dữ dội hóa thân thành một kiệt tác thiên nhiên tràn đầy nữ tính và sắc đẹp huyền ảo.'
      },
      {
        heading: 'Chân dung người lái đò - Vẻ đẹp người nghệ sĩ trên sông nước',
        content: 'Ông lái đò gần bảy mươi tuổi, thân hình vạm vỡ như chất sừng mun nung trong lửa. Ông nắm chắc binh pháp của thần sông thần đá. Bước vào cuộc giao tranh sinh tử ở ba trùng vi thạch trận, ông đò bình tĩnh "cưỡi lên thác Sông Đà như cưỡi hổ", ghì cương lái, phóng thẳng thuyền vào cửa sinh. Sau khi chiến thắng oanh liệt, ông trở về đời thường bình thản nướng ống cơm lam, bàn về cá anh vũ mà không hề khoe khoang chiến công. Ông chính là "thứ vàng mười đã qua thử lửa" của tâm hồn người lao động Tây Bắc.',
        evidence: '"Cưỡi lên thác Sông Đà, phải cưỡi đến cùng như là cưỡi hổ... Nắm chặt lấy cái bờm sóng đúng luồng rồi, ông đò ghì cương lái, bám chắc lấy luồng nước mà phóng nhanh vào cửa sinh..."',
        literaryCommentary: 'Tư tưởng thẩm mỹ mới mẻ của Nguyễn Tuân: chủ nghĩa anh hùng không chỉ có ở nơi chiến trận mà có ngay trong cuộc chiến sinh tử hàng ngày của người lao động.'
      }
    ],
    scholarlyQuotes: [
      {
        critic: 'Nhà phê bình Vũ Ngọc Phan',
        quote: 'Nguyễn Tuân là một bậc thầy về nghệ thuật ngôn từ. Văn của ông mở ra một thế giới từ vựng phong phú đến kinh ngạc, chính xác và sắc sảo như những nét chạm khắc.'
      },
      {
        critic: 'GS. Nguyễn Đăng Mạnh',
        quote: 'Chỉ có Nguyễn Tuân mới nhìn thấy con sông Đà vừa là một kẻ thù số một dữ dằn, vừa là một cố nhân dịu dàng, và biến người lái đò thành một dũng tướng tài hoa bậc nhất.'
      }
    ],
    quotes: [
      'Chúng thủy giai đông tẩu / Đà giang độc bắc lưu (Mọi dòng sông đều chảy về đông / Chỉ có sông Đà chảy theo hướng bắc).',
      'Đá ở đây từ ngàn năm vẫn mai phục hết trong lòng sông... Mặt hòn đá nào trông cũng ngỗ ngược, hằn học, dữ dằn.',
      'Con Sông Đà tuôn dài tuôn dài như một áng tóc trữ tình, đầu tóc chân tóc ẩn hiện trong mây trời Tây Bắc bung nở hoa ban hoa gạo...',
      'Mùa xuân dòng xanh ngọc bích... Mùa thu nước Sông Đà lừ lừ chín đỏ như một người bầm đi vì rượu bữa...',
      'Bờ sông hoang dại như một bờ tiền sử. Bờ sông hồn nhiên như một nỗi niềm cổ tích tuổi xưa...',
      'Cưỡi lên thác Sông Đà, phải cưỡi đến cùng như là cưỡi hổ... Nắm chặt lấy cái bờm sóng đúng luồng rồi, ông đò ghì cương lái, bám chắc lấy luồng nước mà phóng nhanh vào cửa sinh...'
    ],
    artisticValues: [
      'Vốn ngôn từ phong phú, uyên bác, giàu sức tạo hình và nhạc điệu trầm hùng',
      'Bút pháp miêu tả độc đáo, liên tưởng bất ngờ, vận dụng tri thức đa ngành nghệ thuật',
      'Xây dựng hình tượng tương phản đỉnh cao: dòng sông vừa hung bạo vừa trữ tình',
      'Phong cách nghệ thuật tài hoa, uyên bác đạt đến độ chín muồi hoàn thiện'
    ],
    essayOutline: {
      introduction: 'Giới thiệu Nguyễn Tuân - bậc thầy tùy bút và ngôn từ. Giới thiệu tập tùy bút "Sông Đà" (1960) và tác phẩm "Người lái đò Sông Đà" - bản hùng ca về thiên nhiên và con người lao động Tây Bắc.',
      body: [
        '1. Khái quát chung: Chuyến đi thực tế Tây Bắc năm 1958 để tìm chất vàng mười của thiên nhiên và con người mới.',
        '2. Luận điểm 1: Hình tượng con sông Đà hung bạo, dữ dằn (vách đá chẹt lòng sông, ghềnh Hát Loóng, hút nước Tà Mường Vát, ba trùng vi thạch trận hiểm ác).',
        '3. Luận điểm 2: Hình tượng con sông Đà thơ mộng, trữ tình (áng tóc mun dài, màu nước xanh ngọc bích và lừ lừ chín đỏ, bờ sông hoang dại tiền sử).',
        '4. Luận điểm 3: Hình tượng ông lái đò - người chỉ huy mưu lược, người nghệ sĩ tài ba vượt qua ba trùng vi thạch trận.',
        '5. Luận điểm 4: Vẻ đẹp phong thái ung dung, đời thường của ông lái đò sau chiến thắng (nướng ống cơm lam, không khoe khoang).',
        '6. Đánh giá phong cách tài hoa, uyên bác và nghệ thuật ngôn từ độc nhất vô nhị của Nguyễn Tuân.'
      ],
      conclusion: 'Khẳng định giá trị tùy bút: Khúc ca ngợi ca đất nước giang sơn gấm vóc và tôn vinh người lao động bình dị là những người anh hùng đích thực.',
      bonusPoints: 'So sánh hình tượng Sông Đà của Nguyễn Tuân với hình tượng Sông Hương trong "Ai đã đặt tên cho dòng sông?" của Hoàng Phủ Ngọc Tường.'
    },
    examPrompts: [
      'Phân tích hình tượng con sông Đà hung bạo qua ngòi bút tài hoa, uyên bác của Nguyễn Tuân trong tùy bút "Người lái đò Sông Đà".',
      'Cảm nhận vẻ đẹp trữ tình, thơ mộng của dòng sông Đà trong tùy bút "Người lái đò Sông Đà".',
      'Phân tích vẻ đẹp hình tượng người lái đò trong cuộc chiến vượt thác qua ba trùng vi thạch trận.'
    ],
    keywords: [
      'Tài hoa uyên bác',
      'Hung bạo trữ tình',
      'Áng tóc trữ tình',
      'Thạch trận sông Đà',
      'Thứ vàng mười',
      'Cưỡi thác ghềnh',
      'Xanh ngọc bích',
      'Cửa sinh cửa tử'
    ],
    audioText: 'Người lái đò Sông Đà của Nguyễn Tuân là kiệt tác tùy bút của văn học Việt Nam. Bằng ngòi bút tài hoa và uyên bác phi thường, nhà văn đã biến dòng sông Đà thành một sinh thể kỳ vĩ vừa hung bạo vừa dịu dàng, đồng thời tôn vinh người lao động bình dị như một nghệ sĩ anh hùng trên sông nước.'
  },
  {
    id: 'ai-da-dat-ten-cho-dong-song',
    title: 'Ai đã đặt tên cho dòng sông?',
    author: 'Hoàng Phủ Ngọc Tường',
    authorBio: 'Hoàng Phủ Ngọc Tường (1937 - 2023), quê ở Quảng Trị nhưng sinh sống và gắn bó máu thịt trọn đời với xứ Huế mộng mơ. Là một trong những cây bút ký xuất sắc nhất của văn học Việt Nam hiện đại. Phong cách nghệ thuật nổi bật với sự tài hoa, mê đắm, giàu chất thơ và vốn kiến thức uyên thâm về lịch sử, triết học, địa lý, văn hóa cố đô.',
    year: '1981',
    genre: 'ky',
    genreName: 'Bút ký',
    tag: 'Bút ký xứ Huế',
    readTimeMinutes: 14,
    summary: 'Áng bút ký trữ tình say đắm ca ngợi vẻ đẹp dòng sông Hương thơ mộng dưới nhiều góc nhìn: cảnh quan thiên nhiên từ đại ngàn về cố đô, chiều dài lịch sử dựng nước giữ nước và bề dày trầm tích văn hóa thi ca xứ Huế.',
    context: 'Viết tại Huế vào đầu năm 1981, in trong tập bút ký cùng tên (1986). Tác phẩm là kết tinh của tình yêu máu thịt, sự am hiểu sâu sắc và tấm lòng trân trọng của tác giả đối với dòng sông biểu tượng của xứ Huế.',
    authorAesthetics: 'Hoàng Phủ Ngọc Tường xem ký là thể loại của sự đắm say và chiêm nghiệm triết học. Ông nhân hóa thiên nhiên thành sinh thể có tâm hồn, biến sông Hương thành một người con gái xứ Huế dịu dàng, chung thủy và kiêu hãnh.',
    mainThemes: [
      'Vẻ đẹp thiên nhiên đa dạng biến ảo của dòng sông Hương từ đại ngàn Trường Sơn về tới biển cả',
      'Sông Hương trong mối quan hệ gắn bó máu thịt với lịch sử vẻ vang của dân tộc',
      'Sông Hương - cái nôi nuôi dưỡng văn hóa cố đô, âm nhạc và linh hồn thi ca xứ Huế'
    ],
    keyAnalysis: [
      {
        heading: 'Sông Hương ở vùng thượng nguồn rừng già Trường Sơn',
        content: 'Giữa đại ngàn Trường Sơn bí ẩn, sông Hương không hề êm ả mà là "bản trường ca của rừng già, rầm rộ giữa bóng cây đại ngàn, mãnh liệt qua những ghềnh thác, cuộn xoáy như cơn lốc". Tác giả ví sông Hương như "cô gái Di-gan phóng khoáng và man dại" với bản lĩnh kiên cường, tâm hồn tự do, trong sáng. Rừng già đã hun đúc cho dòng sông một vẻ đẹp nguyên sơ, mãnh liệt trước khi nó dịu dàng trở về với đồng bằng.',
        evidence: '"Trước khi về đến vùng châu thổ êm đềm, nó đã là một bản trường ca của rừng già, rầm rộ giữa bóng cây đại ngàn... cô gái Di-gan phóng khoáng và man dại..."',
        literaryCommentary: 'Một phát hiện bất ngờ: xóa bỏ định kiến sông Hương chỉ luôn trầm mặc, u buồn để trả lại cho dòng sông sức sống mãnh liệt của thời thanh xuân giữa đại ngàn.'
      },
      {
        heading: 'Hành trình sông Hương tìm về thành phố Huế',
        content: 'Chảy xuôi về đồng bằng, sông Hương dịu dàng như "người gái đẹp nằm ngủ mơ màng giữa cánh đồng Châu Hóa đầy hoa dại" được người tình mong đợi đến đánh thức. Khi vào lòng thành phố Huế, dòng chảy uốn lượn mềm mại như một cánh cung, đường cong ấy làm cho dòng sông mềm hẳn đi "như một tiếng vâng không nói ra của tình yêu". Dòng sông chảy chậm rãi, chùng chình "như một điệu slow tình cảm dành riêng cho Huế". Khi chia tay thành phố ra biển cả, dòng sông dùng dằng lưu luyến quay lại như nàng Kiều trao lời thề ước thủy chung với Kim Trọng.',
        evidence: '"Sông Hương uốn một cánh cung rất nhẹ sang đến Cồn Hến; đường cong ấy làm cho dòng sông mềm hẳn đi, như một tiếng \'vâng\' không nói ra của tình yêu..."',
        literaryCommentary: 'Bút pháp nhân hóa đắm say: biến chuyến hành trình địa lý của dòng nước thành thiên tình sử lãng mạn giữa người con gái tài hoa và người tình cố đô.'
      },
      {
        heading: 'Sông Hương soi chiếu dưới góc nhìn lịch sử và văn hóa',
        content: 'Về lịch sử: Sông Hương là dòng sông biên thùy thời các vua Hùng, dòng sông anh hùng bảo vệ biên cương thời phong kiến, soi bóng kinh thành Phú Xuân quật khởi và chứng kiến chiến công oanh liệt thời chống Pháp, chống Mỹ. Về văn hóa: Sông Hương là người mẹ phù sa của làn điệu ca Huế thâm trầm, là cội nguồn cảm hứng vô tận của thi ca mà "không bao giờ lặp lại chính mình" trong thơ Nguyễn Du, Bà Huyện Thanh Quan hay Tố Hữu.',
        evidence: '"Sông Hương là dòng sông của thời gian ngân vang, của sử thi viết giữa màu cỏ lá xanh biếc... Có một dòng thi ca về sông Hương, và đó là một dòng thơ không bao giờ lặp lại mình..."',
        literaryCommentary: 'Tầm vóc văn hóa uyên bác: sông Hương không chỉ là cảnh sắc thiên nhiên mà là chứng nhân lịch sử và biểu tượng tâm hồn của cả dân tộc.'
      }
    ],
    scholarlyQuotes: [
      {
        critic: 'Nhà thơ Phạm Tiến Duật',
        quote: 'Hoàng Phủ Ngọc Tường viết ký về sông Hương như viết về chính người tình muôn thuở của mình. Câu văn của ông êm ả, thanh nhã và đượm chất thơ như làn sương khói xứ Huế.'
      },
      {
        critic: 'GS. Nguyễn Đăng Mạnh',
        quote: 'Ký của Hoàng Phủ Ngọc Tường có một sức quyến rũ kỳ lạ, bắt nguồn từ sự hòa quyện giữa chất trí tuệ uyên bác và tâm hồn trữ tình tha thiết.'
      }
    ],
    quotes: [
      'Trước khi về đến vùng châu thổ êm đềm, nó đã là một bản trường ca của rừng già, rầm rộ giữa bóng cây đại ngàn, mãnh liệt qua những ghềnh thác, cuộn xoáy như cơn lốc...',
      'Như một người gái đẹp nằm ngủ mơ màng giữa cánh đồng Châu Hóa đầy hoa dại, sông Hương đã được người tình mong đợi đến đánh thức...',
      'Sông Hương uốn một cánh cung rất nhẹ sang đến Cồn Hến; đường cong ấy làm cho dòng sông mềm hẳn đi, như một tiếng "vâng" không nói ra của tình yêu.',
      'Hình như trong khoảnh khắc chùng chình ấy, sông Hương đã trở thành một người tình dịu dàng và chung thủy...',
      'Sông Hương là dòng sông của thời gian ngân vang, của sử thi viết giữa màu cỏ lá xanh biếc...',
      'Có một dòng thi ca về sông Hương, và đó là một dòng thơ không bao giờ lặp lại mình...'
    ],
    artisticValues: [
      'Thể loại bút ký kết hợp nhuần nhuyễn giữa trí tuệ uyên bác và chất thơ trữ tình đắm say',
      'Nghệ thuật nhân hóa độc đáo, biến dòng sông thành người con gái Huế đa tình, thủy chung son sắt',
      'Ngôn ngữ thanh nhã, giàu sức gợi cảm, nhịp điệu câu văn êm đềm như dòng chảy sông Hương',
      'Sự am hiểu sâu rộng về địa lý, lịch sử, văn hóa dân gian và thi ca cổ điển'
    ],
    essayOutline: {
      introduction: 'Giới thiệu Hoàng Phủ Ngọc Tường - nhà văn của xứ Huế mộng mơ. Giới thiệu bút ký "Ai đã đặt tên cho dòng sông?" và vẻ đẹp huyền thoại, thơ mộng của dòng sông Hương.',
      body: [
        '1. Vẻ đẹp sông Hương ở vùng thượng nguồn rừng già (bản trường ca dữ dội, cô gái Di-gan phóng khoáng và man dại).',
        '2. Sông Hương trên hành trình tìm về thành phố Huế (người gái đẹp ngủ mơ màng, đường cong mềm mại như tiếng vâng của tình yêu).',
        '3. Sông Hương trong lòng thành phố Huế (điệu slow tình cảm êm đềm) và khúc chia tay dùng dằng trao lời thề ước.',
        '4. Sông Hương dưới góc nhìn lịch sử vẻ vang (dòng sông biên cương thời Hùng Vương, dòng sông sử thi anh hùng).',
        '5. Sông Hương dưới góc nhìn văn hóa và thi ca (cái nôi ca Huế, dòng thi ca không bao giờ lặp lại chính mình).',
        '6. Đánh giá nét đặc sắc về phong cách nghệ thuật tài hoa, mê đắm và ngôn từ thanh lịch của tác giả.'
      ],
      conclusion: 'Khẳng định tình yêu say đắm của tác giả đối với dòng sông Hương và linh hồn văn hóa cố đô ngàn năm.',
      bonusPoints: 'Đối chiếu với sông Đà của Nguyễn Tuân để làm nổi bật nét mềm mại, trầm mặc văn hóa đặc trưng của sông Hương.'
    },
    examPrompts: [
      'Cảm nhận về vẻ đẹp của dòng sông Hương ở vùng thượng nguồn rừng già trong bút ký "Ai đã đặt tên cho dòng sông?".',
      'Phân tích vẻ đẹp thơ mộng và trữ tình của sông Hương khi chảy qua lòng thành phố Huế.',
      'Vẻ đẹp sông Hương được soi chiếu từ góc độ lịch sử và văn hóa trong bút ký của Hoàng Phủ Ngọc Tường.'
    ],
    keywords: [
      'Cô gái Di-gan',
      'Bản trường ca rừng già',
      'Người tình dịu dàng',
      'Tiếng vâng của tình yêu',
      'Điệu slow tình cảm',
      'Dòng sông sử thi',
      'Văn hóa cố đô',
      'Tài hoa mê đắm'
    ],
    audioText: 'Ai đã đặt tên cho dòng sông của Hoàng Phủ Ngọc Tường là khúc tình ca dịu dàng dành riêng cho sông Hương xứ Huế. Dưới ngòi bút tài hoa và mê đắm, dòng sông hiện lên như một trang tuyệt sắc giai nhân, thủy chung son sắt với người tình cố đô.'
  },
  {
    id: 'hon-truong-ba-da-hang-thit',
    title: 'Hồn Trương Ba, da hàng thịt',
    author: 'Lưu Quang Vũ',
    authorBio: 'Lưu Quang Vũ (1948 - 1988), quê ở Đà Nẵng, sinh tại Phú Thọ. Là nhà viết kịch tài ba kiệt xuất nhất của nền sân khấu hiện đại Việt Nam thời kỳ đổi mới. Tác phẩm kịch của ông luôn nóng hổi tính thời sự, đào sâu vào các vấn đề nhân sinh bức thiết và chứa đựng triết lý nhân văn sâu xa.',
    year: '1981',
    genre: 'kinh',
    genreName: 'Kịch',
    tag: 'Kịch bản văn học',
    readTimeMinutes: 14,
    summary: 'Bi kịch sống nhờ, sống chắp vá của Hồn Trương Ba thanh cao trong thể xác phàm tục của anh hàng thịt, qua đó đặt ra triết lý sâu sắc về sự thống nhất hài hòa giữa thể xác và linh hồn, khát vọng sống là chính mình và bảo vệ nhân cách.',
    context: 'Viết năm 1981, công diễn năm 1984. Dựa theo tích truyện dân gian quen thuộc nhưng Lưu Quang Vũ đã sáng tạo đoạn kết kịch tính và giàu ý nghĩa triết học sâu xa, phản ánh hiện thực xã hội Việt Nam thời kỳ trước đổi mới.',
    authorAesthetics: 'Lưu Quang Vũ quan niệm sân khấu kịch phải là nơi đối thoại thẳng thắn với cuộc đời, phê phán sự giả tạo, tha hóa đạo đức và thức tỉnh khát vọng sống trung thực, toàn vẹn của con người.',
    mainThemes: [
      'Bi kịch tha hóa đau đớn khi linh hồn thanh cao bị thân xác phàm tục lấn át, chi phối',
      'Nỗi đau của con người khi làm tổn thương những người thân yêu nhất trong gia đình',
      'Khát vọng sống trọn vẹn, thanh thản, sống là chính mình và bảo vệ sự trong sạch của tâm hồn'
    ],
    keyAnalysis: [
      {
        heading: 'Màn đối thoại giữa Hồn Trương Ba và Xác hàng thịt',
        content: 'Cuộc tranh cãi nảy lửa thể hiện xung đột giữa phần thanh cao và dục vọng tầm thường. Xác hàng thịt chế giễu sự bất lực của Hồn Trương Ba, khẳng định sức mạnh ghê gớm của thể xác đối với linh hồn. Hồn Trương Ba đau đớn nhận ra mình đang bị tha hóa từng ngày.',
        evidence: '"Không thể bên trong một đằng, bên ngoài một nẻo được. Tôi muốn được là tôi toàn vẹn!"',
        literaryCommentary: 'Triết lý nhân sinh hiện đại: Không thể ngụy biện cho sự tha hóa bằng cách đổ lỗi cho hoàn cảnh.'
      },
      {
        heading: 'Xung đột giữa Hồn Trương Ba và người thân',
        content: 'Vợ Trương Ba đau buồn muốn bỏ đi nhường chồng; con trai chạy theo thói vụ lợi, thực dụng; cái Gái - cháu nội - khinh ghét xua đuổi bàn tay thô tục. Hồn Trương Ba rơi vào tuyệt vọng cùng cực vì nhận ra sự giả tạo của bản thân mang lại bất hạnh cho gia đình.',
        evidence: '"Ông chỉ nghĩ đến sống, nhưng sống thế nào thì ông lại không cần biết! Sống nhờ vả, chắp vá, làm khổ người khác thì sống làm gì?"',
        literaryCommentary: 'Nỗi bi kịch bị ruồng bỏ bởi chính những người mình yêu thương nhất là đòn bẩy thúc đẩy nhân vật đưa ra quyết định giải thoát dũng cảm.'
      },
      {
        heading: 'Màn đối thoại với Đế Thích và quyết định dũng cảm',
        content: 'Đế Thích khuyên Trương Ba nhập vào xác cu Tị, nhưng ông dứt khoát chối từ: "Không thể bên trong một đằng, bên ngoài một nẻo được. Tôi muốn được là tôi toàn vẹn!". Trương Ba chấp nhận trả lại xác, chấp nhận cái chết để tâm hồn mãi mãi thanh sạch và để cu Tị được sống.',
        evidence: '"Tôi không muốn sống bằng cái xác của người khác nữa. Trả lại xác cho anh hàng thịt, để cu Tị sống lại, còn tôi xin được chết hẳn!"',
        literaryCommentary: 'Sự chiến thắng của nhân cách: chết trong danh dự và thanh thản còn hơn sống mòn, sống giả tạo trong nhục nhã.'
      }
    ],
    scholarlyQuotes: [
      {
        critic: 'Nhà nghiên cứu Phan Ngọc',
        quote: 'Vở kịch của Lưu Quang Vũ là đỉnh cao của kịch bản văn học Việt Nam, giải quyết vấn đề muôn thuở của loài người: làm sao để sống là chính mình giữa một thế giới đầy cám dỗ và giả tạo.'
      }
    ],
    quotes: [
      'Không thể bên trong một đằng, bên ngoài một nẻo được. Tôi muốn được là tôi toàn vẹn!',
      'Ông chỉ nghĩ đến sống, nhưng sống thế nào thì ông lại không cần biết! Sống nhờ vả, chắp vá, làm khổ người khác thì sống làm gì?',
      'Tôi không muốn sống bằng cái xác của người khác nữa. Trả lại xác cho anh hàng thịt, để cu Tị sống lại, còn tôi xin được chết hẳn!',
      'Tôi vẫn ở đây, trong màu xanh của cây vườn, trong hương thơm của quả chín, trong ký ức của mọi người...'
    ],
    artisticValues: [
      'Nghệ thuật xây dựng xung đột kịch dồn dập, căng thẳng, kịch tính cao độ',
      'Ngôn ngữ đối thoại sắc sảo, hàm súc, giàu sức nặng triết lý nhân sinh',
      'Đào sâu vào nội tâm nhân vật, kết hợp nhuần nhuyễn giữa yếu tố hiện thực và biểu tượng kỳ ảo'
    ],
    essayOutline: {
      introduction: 'Giới thiệu Lưu Quang Vũ - nhà viết kịch tài ba của Việt Nam. Giới thiệu vở kịch "Hồn Trương Ba, da hàng thịt" và bi kịch sống không phải là chính mình.',
      body: [
        '1. Bi kịch "bên trong một đằng, bên ngoài một nẻo" qua đối thoại giữa Hồn Trương Ba và Xác hàng thịt.',
        '2. Nỗi đau đớn tột cùng của Trương Ba trước sự xa lánh, đau khổ của người thân trong gia đình.',
        '3. Cuộc đối thoại nảy lửa với Tiên Đế Thích về lẽ sống ở đời.',
        '4. Quyết định từ chối nhập vào xác cu Tị - sự chiến thắng của nhân cách thanh cao.',
        '5. Ý nghĩa triết lý nhân sinh: con người chỉ hạnh phúc khi được sống trọn vẹn, hài hòa thể xác và tâm hồn.'
      ],
      conclusion: 'Khẳng định thông điệp nhân văn vĩnh cửu: sống thật với bản thân, dũng cảm đấu tranh với cám dỗ tầm thường để giữ gìn nhân cách.',
      bonusPoints: 'Liên hệ với hiện tượng sống ảo, tha hóa nhân cách trong xã hội hiện đại để làm sâu sắc thêm tính thời sự của tác phẩm.'
    },
    examPrompts: [
      'Phân tích màn đối thoại giữa Hồn Trương Ba và Xác hàng thịt trong vở kịch của Lưu Quang Vũ.',
      'Phân tích ý nghĩa câu nói của Hồn Trương Ba: "Không thể bên trong một đằng, bên ngoài một nẻo được. Tôi muốn được là tôi toàn vẹn!".'
    ],
    keywords: [
      'Tôi muốn là tôi toàn vẹn',
      'Bên trong một đằng bên ngoài một nẻo',
      'Xác hàng thịt',
      'Đế Thích',
      'Xung đột kịch',
      'Tha hóa',
      'Triết lý nhân sinh'
    ],
    audioText: 'Hồn Trương Ba, da hàng thịt của Lưu Quang Vũ là đỉnh cao kịch trường Việt Nam. Tác phẩm cất lên tiếng chuông cảnh tỉnh sâu sắc: sống đích thực là phải được sống là chính mình, hài hòa giữa thể xác và tâm hồn, không thỏa hiệp với cái tầm thường.'
  },
  {
    id: 'tuyen-ngon-doc-lap',
    title: 'Tuyên ngôn Độc lập',
    author: 'Hồ Chí Minh',
    authorBio: 'Chủ tịch Hồ Chí Minh (1890 - 1969) - Anh hùng giải phóng dân tộc, Danh nhân văn hóa thế giới. Người là một nhà chính luận kiệt xuất với phong cách lập luận sắc bén, đanh thép, khúc chiết và truyền cảm sâu sắc.',
    year: '1945',
    genre: 'chinhluan',
    genreName: 'Chính luận',
    tag: 'Áng văn thiên cổ',
    readTimeMinutes: 12,
    summary: 'Văn kiện lịch sử vô giá tuyên bố chấm dứt ách thống trị của thực dân phong kiến, khai sinh nước Việt Nam Dân chủ Cộng hòa và khẳng định ý chí sắt đá bảo vệ nền tự do độc lập.',
    context: 'Ngày 2/9/1945 tại Quảng trường Ba Đình, Hà Nội, trước hàng chục vạn đồng bào cả nước, Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời đọc bản Tuyên ngôn Độc lập.',
    mainThemes: [
      'Cơ sở pháp lý vững chắc dựa trên quyền bình đẳng thiêng liêng của con người và các dân tộc',
      'Bản cáo trạng đanh thép vạch trần tội ác cướp nước và bán nước của thực dân Pháp',
      'Lời tuyên bố độc lập đĩnh đạc và ý chí sắt đá bảo vệ nền tự do của dân tộc Việt Nam'
    ],
    keyAnalysis: [
      {
        heading: 'Cơ sở pháp lý đầy mưu lược',
        content: 'Bác mở đầu bằng việc trích dẫn hai bản Tuyên ngôn Độc lập của Mỹ (1776) và Tuyên ngôn Nhân quyền Pháp (1791). Đây là nghệ thuật "gậy ông đập lưng ông", vừa đặt cuộc cách mạng Việt Nam ngang hàng với các cuộc cách mạng lớn trên thế giới, vừa chặn đứng âm mưu tái chiếm của thực dân.'
      },
      {
        heading: 'Bản cáo trạng đanh thép về tội ác của thực dân Pháp',
        content: 'Tố cáo Pháp phản bội khẩu hiệu "Tự do, Bình đẳng, Bác ái": về chính trị (chia rẽ, đàn áp, tắm các cuộc khởi nghĩa trong bể máu); về kinh tế (bóc lột đến tận xương tủy, gây ra nạn đói hơn 2 triệu đồng bào chết đói). Khẳng định nhân dân ta giành lại nước từ tay Nhật chứ không phải từ tay Pháp.'
      },
      {
        heading: 'Lời tuyên bố độc lập lịch sử',
        content: 'Tuyên bố thoát ly hẳn quan hệ thực dân với Pháp, xóa bỏ mọi hiệp ước bất bình đẳng. Khẳng định một dân tộc gan góc chống phát xít thì "dân tộc đó phải được tự do! Dân tộc đó phải được độc lập!".'
      }
    ],
    quotes: [
      'Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hóa cho họ những quyền không ai có thể xâm phạm được; trong những quyền ấy, có quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc.',
      'Thế mà hơn tám mươi năm nay, bọn thực dân Pháp lợi dụng lá cờ tự do, bình đẳng, bác ái, đến cướp đất nước ta, áp bức đồng bào ta. Hành động của chúng đè hẳn lên nhân đạo và chính nghĩa.',
      'Pháp chạy, Nhật hàng, vua Bảo Đại thoái vị. Dân ta đã đánh đổ các xiềng xích thực dân gần 100 năm nay để gây dựng nên nước Việt Nam độc lập...',
      'Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập.',
      'Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy.'
    ],
    artisticValues: [
      'Lập luận sắc bén, logic chặt chẽ, kết cấu tầng tầng lớp lớp không thể bác bỏ',
      'Dẫn chứng xác thực, số liệu cụ thể không ai chối cãi được',
      'Ngôn ngữ đanh thép, hào sảng, truyền cảm hứng mạnh mẽ tới hàng triệu trái tim'
    ],
    essayOutline: {
      introduction: 'Giới thiệu Hồ Chí Minh - nhà tư tưởng, nhà chính luận kiệt xuất. Giới thiệu Tuyên ngôn Độc lập (2/9/1945) - áng văn lập quốc vĩ đại mở ra kỷ nguyên mới.',
      body: [
        '1. Cơ sở pháp lý và mưu lược ngoại giao thiên tài khi trích dẫn hai bản Tuyên ngôn của Mỹ và Pháp.',
        '2. Cơ sở thực tiễn: Bản cáo trạng đanh thép vạch trần tội ác thực dân Pháp và tinh thần nhân đạo của nhân dân ta.',
        '3. Lời tuyên bố trịnh trọng về nền độc lập và ý chí bảo vệ độc lập của toàn thể dân tộc.',
        '4. Giá trị lịch sử to lớn và giá trị văn học chính luận mẫu mực của tác phẩm.'
      ],
      conclusion: 'Khẳng định tầm vóc thời đại của Tuyên ngôn Độc lập: bản thiên cổ hùng văn soi đường cho dân tộc trên con đường tự do, độc lập.'
    },
    examPrompts: [
      'Phân tích cơ sở pháp lý và thực tiễn trong bản "Tuyên ngôn Độc lập" của Chủ tịch Hồ Chí Minh.',
      'Nghệ thuật lập luận mẫu mực của Hồ Chí Minh qua phần mở đầu bản Tuyên ngôn Độc lập.'
    ],
    keywords: [
      'Tuyên ngôn Độc lập',
      'Chính luận mẫu mực',
      'Cơ sở pháp lý',
      'Gậy ông đập lưng ông',
      'Bản cáo trạng',
      'Quyền bình đẳng',
      'Ba Đình 1945'
    ],
    audioText: 'Tuyên ngôn Độc lập của Chủ tịch Hồ Chí Minh là áng văn chính luận tuyệt tác của dân tộc Việt Nam. Bằng lập luận đanh thép và lý lẽ không thể chối cãi, Người đã tuyên bố với thế giới nền độc lập tự do thiêng liêng của nước Việt Nam Dân chủ Cộng hòa.'
  },
  {
    id: 'rung-xa-nu',
    title: 'Rừng xà nu',
    author: 'Nguyễn Trung Thành',
    authorBio: 'Nguyễn Trung Thành (Nguyên Ngọc, sinh 1932), nhà văn gắn bó máu thịt với mảnh đất Tây Nguyên qua hai cuộc kháng chiến chống Pháp và chống Mỹ. Văn phong đậm chất sử thi tráng lệ, giọng điệu ngợi ca hào hùng và giàu chất thơ.',
    year: '1965',
    genre: 'truyen',
    genreName: 'Truyện',
    tag: 'Sử thi Tây Nguyên',
    readTimeMinutes: 14,
    summary: 'Bản anh hùng ca về cuộc chiến đấu quật cường của dân làng Xô Man chống đế quốc Mỹ, kết tinh qua hình tượng cây xà nu bất diệt và cuộc đời người anh hùng Tnú.',
    context: 'Sáng tác năm 1965 tại chiến trường khu V lúc đế quốc Mỹ đổ ồ ạt quân viễn chinh vào miền Nam. In trong tập "Trên quê hương những anh hùng Điện Ngọc".',
    mainThemes: [
      'Hình tượng cây xà nu - biểu tượng cho sức sống kiên cường bất khuất của con người Tây Nguyên',
      'Cuộc đời bi tráng của Tnú và con đường giác ngộ cách mạng',
      'Chân lý thời đại: Phải dùng bạo lực cách mạng để tiêu diệt bạo lực phản cách mạng'
    ],
    keyAnalysis: [
      {
        heading: 'Hình tượng cây xà nu - Biểu tượng sức sống bất diệt',
        content: 'Mở đầu và kết thúc bằng rừng xà nu bạt ngàn. Dù chịu hàng vạn phát đạn đại bác, thân cây ứa máu nhưng cây xà nu vẫn ham ánh sáng mặt trời, cây mẹ ngã xuống cây con mọc lên: "Cạnh một cây xà nu mới ngã gục, đã có bốn năm cây con mọc lên... đạn đại bác không giết nổi chúng".'
      },
      {
        heading: 'Nhân vật Tnú - Người con ưu tú của làng Xô Man',
        content: 'Tnú mồ côi từ nhỏ, giác ngộ cách mạng sớm: nuốt thư liên lạc, lấy đá đập vào đầu tự phạt. Trưởng thành, Tnú chịu đựng bi kịch đau đớn khi chứng kiến vợ con bị giặc giết hại, bản thân bị đốt mười đầu ngón tay bằng nhựa xà nu. Dù tàn tật, Tnú vẫn cầm súng giết giặc cứu nước.'
      },
      {
        heading: 'Cụ Mết và chân lý cách mạng bất hủ',
        content: 'Cụ Mết như cây xà nu cổ thụ, là linh hồn của buôn làng. Câu nói đanh thép của cụ Mết: "Chúng nó đã cầm súng, mình phải cầm giáo!" đúc kết chân lý sống còn của cách mạng miền Nam.'
      }
    ],
    quotes: [
      'Làng ở trong tầm đại bác của đồn giặc... Không có cây nào không bị thương. Có những cây bị chặt đứt nửa thân mình, đổ ào ào như một trận bão.',
      'Cạnh một cây xà nu mới ngã gục, đã có bốn năm cây con mọc lên, ngọn xanh rờn, hình nhọn mũi tên lao thẳng lên bầu trời.',
      'Tnú không kêu một tiếng nào. Anh mở mắt trừng trừng nhìn... Người cộng sản không thèm kêu van!',
      'Nhớ lấy, ghi lấy. Sau này tao chết rồi, bay còn sống phải nói lại cho con cháu: Chúng nó đã cầm súng, mình phải cầm giáo!',
      'Đứng trên đồi xà nu ấy trông ra xa, đến hết tầm mắt cũng không thấy gì khác ngoài những đồi xà nu nối tiếp tới chân trời...'
    ],
    artisticValues: [
      'Không khí sử thi tráng lệ, giọng văn trầm hùng ngợi ca',
      'Kết cấu vòng tròn đầu cuối tương ứng làm nổi bật sức sống bất diệt',
      'Nghệ thuật xây dựng nhân vật điển hình kết hợp giữa cá tính sống động và phẩm chất cộng đồng'
    ],
    essayOutline: {
      introduction: 'Giới thiệu Nguyễn Trung Thành và văn học đề tài Tây Nguyên. Giới thiệu truyện ngắn "Rừng xà nu" - bản hùng ca đánh Mỹ bất tử của đồng bào Tây Nguyên.',
      body: [
        '1. Ý nghĩa biểu tượng của hình tượng rừng xà nu - sức sống quật khởi trong bom đạn.',
        '2. Cuộc đời và phẩm chất anh hùng của nhân vật Tnú (gan dạ, kiên trung, bất khuất).',
        '3. Các thế hệ nối tiếp nhau của làng Xô Man (cụ Mết, Dít, bé Heng).',
        '4. Chân lý cách mạng của thời đại qua lời dạy của cụ Mết.',
        '5. Đánh giá cảm hứng sử thi và phong cách trần thuật độc đáo.'
      ],
      conclusion: 'Khẳng định sức sống trường tồn của bản anh hùng ca Tây Nguyên trong lòng bạn đọc nhiều thế hệ.'
    },
    examPrompts: [
      'Phân tích ý nghĩa biểu tượng của hình tượng cây xà nu trong truyện ngắn "Rừng xà nu" của Nguyễn Trung Thành.',
      'Cảm nhận về vẻ đẹp người anh hùng Tnú trong tác phẩm "Rừng xà nu".'
    ],
    keywords: [
      'Cây xà nu',
      'Sử thi Tây Nguyên',
      'Tnú',
      'Cụ Mết',
      'Mười đầu ngón tay',
      'Chúng nó cầm súng mình cầm giáo',
      'Làng Xô Man'
    ],
    audioText: 'Rừng xà nu của Nguyễn Trung Thành là bản hùng ca tráng lệ về cuộc chiến đấu quật cường của đồng bào Tây Nguyên. Hình tượng Tnú và rừng xà nu ngút ngàn là biểu tượng cho sức sống bất diệt của con người Việt Nam trước bom đạn kẻ thù.'
  },
  {
    id: 'dat-nuoc-nguyen-dinh-thi',
    title: 'Đất nước (Nguyễn Đình Thi)',
    author: 'Nguyễn Đình Thi',
    authorBio: 'Nguyễn Đình Thi (1924 - 2003), sinh tại Luông Pha-băng (Lào), quê gốc ở làng Vũ Thạnh, Hà Nội. Là một nghệ sĩ đa tài: viết văn, làm thơ, soạn kịch, sáng tác nhạc và tiểu luận phê bình. Thơ ông tự do, phóng khoáng mà hàm súc, giàu tính triết luận và hình ảnh biểu tượng hiện đại.',
    year: '1948 - 1955',
    genre: 'tho',
    genreName: 'Thơ',
    tag: 'Thơ ca kháng chiến',
    readTimeMinutes: 12,
    summary: 'Bản giao hưởng thi ca tráng lệ kết tinh từ những cảm xúc thu Hà Nội bâng khuâng đến bức tranh mùa thu chiến khu Việt Bắc tươi sáng và hình tượng Đất nước đau thương, căm hờn vùng đứng dậy "rũ bùn đứng dậy sáng lòa".',
    context: 'Sáng tác trong khoảng thời gian từ năm 1948 đến năm 1955: phần đầu lấy từ hai bài thơ "Sáng mát trong như sáng năm xưa" (1948) và "Đêm mít tinh" (1949), phần sau được viết thêm sau chiến thắng Điện Biên Phủ (1955). In trong tập thơ "Người chiến sĩ" (1956).',
    authorAesthetics: 'Nguyễn Đình Thi luôn tìm tòi đổi mới thơ ca theo hướng tự do, hiện đại, kết hợp nhịp điệu nội tâm trầm lắng với những hình ảnh biểu tượng mang tầm vóc sử thi kỳ vĩ.',
    mainThemes: [
      'Cảm hứng mùa thu Hà Nội trong hoài niệm và mùa thu Việt Bắc tràn ngập niềm tự hào làm chủ đất nước',
      'Hình tượng Đất nước trong chiến tranh: từ đau thương, máu lửa và căm hờn vươn lên quật khởi anh hùng',
      'Đỉnh cao biểu tượng hào khí dân tộc: "Nước Việt Nam từ máu lửa / Rũ bùn đứng dậy sáng lòa"'
    ],
    keyAnalysis: [
      {
        heading: 'Hai bức tranh mùa thu: Thu Hà Nội hoài niệm và Thu Việt Bắc tự do',
        content: 'Bài thơ mở đầu bằng tín hiệu thu Hà Nội trong ký ức: "Sáng mát trong như sáng năm xưa / Gió thổi mùa thu hương cốm mới". Hình ảnh "Người ra đi đầu không ngoảnh lại / Sau lưng thềm nắng lá rơi đầy" khắc họa vẻ đẹp dứt khoát vì nghĩa lớn nhưng nội tâm vẫn nặng lòng lưu luyến với Thủ đô. Chuyển sang mùa thu hiện tại ở chiến khu Việt Bắc, giọng thơ reo vui phơi phới: "Mùa thu nay khác rồi / Tôi đứng vui nghe giữa núi đồi". Điệp ngữ khẳng định chủ quyền đanh thép: "Trời xanh đây là của chúng ta / Núi rừng đây là của chúng ta" thể hiện niềm tự hào vô bờ bến của người dân nô lệ nay đã làm chủ giang sơn.',
        evidence: '"Người ra đi đầu không ngoảnh lại / Sau lưng thềm nắng lá rơi đầy / Mùa thu nay khác rồi... / Trời xanh đây là của chúng ta / Núi rừng đây là của chúng ta"',
        literaryCommentary: 'Sự chuyển điệu tài tình từ nhịp trầm hoài niệm sang nhịp điệu sảng khoái, khoáng đạt của kỷ nguyên độc lập tự do.'
      },
      {
        heading: 'Đất nước trong khói lửa chiến tranh: Đau thương, Căm hờn và Nghĩa tình',
        content: 'Nguyễn Đình Thi nhìn thẳng vào những mất mát tàn khốc của chiến tranh: "Bát cơm chan đầy nước mắt / Bay còn giằng khỏi miệng ta". Từ nỗi đau tột cùng, lòng căm thù giặc và ý chí chiến đấu bừng lên: "Từ những năm đau thương chiến đấu / Đã ngời lên nét mặt quê hương / Từ gốc lúa bờ tre hồn hậu / Đã bật lên những tiếng căm hờn". Đất nước hiện lên với truyền thống ngàn đời bất khuất: "Đêm đêm rì rầm trong tiếng đất / Những buổi ngày xưa vọng nói về".',
        evidence: '"Ôi những cánh đồng quê chảy máu / Dây thép gai đâm nát trời chiều... / Từ những năm đau thương chiến đấu / Đã ngời lên nét mặt quê hương"',
        literaryCommentary: 'Hình ảnh "Dây thép gai đâm nát trời chiều" là một sáng tạo ngôn từ hiện đại, khắc họa nỗi đau nhức nhối của non sông bị xâm phạm.'
      },
      {
        heading: 'Tượng đài Đất nước quật khởi hào hùng "Rũ bùn đứng dậy sáng lòa"',
        content: 'Khổ thơ kết bài là đỉnh cao chói lọi của cảm hứng sử thi: "Súng nổ rung trời giận dữ / Người lên như nước vỡ bờ / Nước Việt Nam từ máu lửa / Rũ bùn đứng dậy sáng lòa". Hình ảnh "Rũ bùn" gợi kiếp đời nô lệ lầm than hàng thế kỷ; "đứng dậy sáng lòa" khẳng định tư thế hiên ngang, chói lọi hào quang chiến thắng của cả một dân tộc anh hùng bước ra ánh sáng thời đại.',
        evidence: '"Súng nổ rung trời giận dữ / Người lên như nước vỡ bờ / Nước Việt Nam từ máu lửa / Rũ bùn đứng dậy sáng lòa."',
        literaryCommentary: 'Hai câu thơ cuối được xem là một trong những câu thơ hay nhất của thi ca kháng chiến chống Pháp, tạc vào lịch sử bức phù điêu bằng ngôn từ bất hủ.'
      }
    ],
    scholarlyQuotes: [
      {
        critic: 'GS. Nguyễn Đăng Mạnh',
        quote: 'Bài thơ Đất nước của Nguyễn Đình Thi có cái nhìn khái quát sử thi kỳ vĩ, kết tinh thành công nhất hình tượng Tổ quốc Việt Nam từ đau thương nô lệ vươn tới đỉnh cao chiến thắng.'
      }
    ],
    quotes: [
      'Sáng mát trong như sáng năm xưa / Gió thổi mùa thu hương cốm mới',
      'Người ra đi đầu không ngoảnh lại / Sau lưng thềm nắng lá rơi đầy',
      'Trời xanh đây là của chúng ta / Núi rừng đây là của chúng ta / Những cánh đồng thơm mát / Những ngả đường bát ngát / Những dòng sông đỏ nặng phù sa',
      'Nước chúng ta / Nước những người chưa bao giờ khuất / Đêm đêm rì rầm trong tiếng đất / Những buổi ngày xưa vọng nói về!',
      'Ôi những cánh đồng quê chảy máu / Dây thép gai đâm nát trời chiều',
      'Súng nổ rung trời giận dữ / Người lên như nước vỡ bờ / Nước Việt Nam từ máu lửa / Rũ bùn đứng dậy sáng lòa.'
    ],
    artisticValues: [
      'Thể thơ tự do phóng khoáng, nhịp điệu biến hóa linh hoạt theo mạch vận động của cảm xúc và suy tưởng',
      'Ngôn ngữ thơ cô đọng, hàm súc, giàu tính biểu tượng và sức gợi hình ảnh hiện đại',
      'Nghệ thuật đối lập tương phản giữa quá khứ - hiện tại, giữa đau thương tăm tối và hào quang chiến thắng'
    ],
    essayOutline: {
      introduction: 'Giới thiệu nhà thơ Nguyễn Đình Thi và bài thơ "Đất nước" (1948-1955) - đỉnh cao của thơ ca kháng chiến chống Pháp.',
      body: [
        '1. Cảm hứng mùa thu Hà Nội hoài niệm và vẻ đẹp người chiến sĩ ra đi vì nghĩa lớn.',
        '2. Bức tranh mùa thu Việt Bắc tươi sáng và niềm tự hào làm chủ giang sơn đất nước.',
        '3. Hình tượng Đất nước đau thương, căm hờn nhưng kiên cường bất khuất trong chiến tranh.',
        '4. Khổ kết sử thi chói lọi: Hình tượng Đất nước "Rũ bùn đứng dậy sáng lòa".',
        '5. Đánh giá đặc sắc nghệ thuật: thể thơ tự do, hình ảnh biểu tượng kỳ vĩ và chất suy tưởng triết luận.'
      ],
      conclusion: 'Khẳng định giá trị bất hủ của thi phẩm trong dòng chảy thơ viết về đề tài Tổ quốc.',
      bonusPoints: 'Đối chiếu với "Đất Nước" của Nguyễn Khoa Điềm để thấy sự tiếp nối và phát triển hình tượng Tổ quốc qua hai cuộc kháng chiến.'
    },
    examPrompts: [
      'Cảm nhận về hình tượng Đất nước trong bài thơ "Đất nước" của Nguyễn Đình Thi.',
      'Phân tích sự vận động cảm xúc của tác giả qua hai đoạn thơ mùa thu trong bài thơ "Đất nước" (Nguyễn Đình Thi).'
    ],
    keywords: [
      'Hương cốm mới',
      'Thềm nắng lá rơi đầy',
      'Trời xanh của chúng ta',
      'Dây thép gai đâm nát trời chiều',
      'Rũ bùn đứng dậy sáng lòa',
      'Nguyễn Đình Thi'
    ],
    audioText: 'Đất nước của Nguyễn Đình Thi là khúc tráng ca hào sảng về Tổ quốc Việt Nam trong kháng chiến chống Pháp. Đi từ mùa thu Hà Nội bâng khuâng đến khói lửa chiến trường, bài thơ kết tinh ở bức tượng đài Nước Việt Nam từ máu lửa rũ bùn đứng dậy sáng lòa.'
  },
  {
    id: 'nhung-dua-con-trong-gia-dinh',
    title: 'Những đứa con trong gia đình',
    author: 'Nguyễn Thi',
    authorBio: 'Nguyễn Thi (1928 - 1968), quê Nam Định nhưng dấn thân và hy sinh anh dũng tại mặt trận Sài Gòn. Được mệnh danh là "nhà văn của người nông dân Nam Bộ" kiên cường, hồn hậu và giàu tình nghĩa.',
    year: '1966',
    genre: 'truyen',
    genreName: 'Truyện',
    tag: 'Truyện ngắn đánh Mỹ',
    readTimeMinutes: 13,
    summary: 'Chuyện về hai chị em Chiến và Việt kế thừa truyền thống kiên cường của một gia đình nông dân Nam Bộ có mối thù sâu sắc với giặc Mỹ, cùng nhau lên đường nhập ngũ trả nợ nước thù nhà.',
    context: 'Sáng tác năm 1966 tại chiến trường miền Nam giữa lúc cuộc kháng chiến chống Mỹ diễn ra khốc liệt nhất.',
    mainThemes: [
      'Dòng sông truyền thống gia đình Nam Bộ chảy mãi qua các thế hệ',
      'Vẻ đẹp tâm hồn trong sáng, dũng cảm và tình thương yêu sâu nặng của hai chị em Chiến và Việt',
      'Sức mạnh gắn kết giữa tình cảm gia đình và tình yêu Tổ quốc'
    ],
    keyAnalysis: [
      {
        heading: 'Khái niệm "Dòng sông truyền thống" của gia đình',
        content: 'Cuốn sổ gia đình mà chú Năm gìn giữ ghi lại lịch sử hào hùng và bi thương của các thế hệ. Mỗi đứa con như một khúc sông trong dòng sông lớn, khúc sau bao giờ cũng chảy xa hơn khúc trước.'
      },
      {
        heading: 'Đêm mít tinh ghi danh và cảnh khiêng bàn thờ má',
        content: 'Hai chị em tranh nhau tòng quân. Trước ngày ra trận, cảnh hai chị em khiêng bàn thờ má sang gửi nhà chú Năm là chi tiết thiêng liêng nhất, biến nỗi đau mất mát thành sức mạnh chiến đấu.'
      },
      {
        heading: 'Chiến sĩ trẻ Việt bị thương nơi chiến trường',
        content: 'Trần thuật theo dòng hồi tưởng chập chờn của Việt khi bị thương lạc giữa rừng cao su. Dù kiệt sức mù cả hai mắt, ngón tay Việt vẫn đặt sẵn trên cò súng sẵn sàng nổ súng vào kẻ thù.'
      }
    ],
    quotes: [
      'Chuyện gia đình ta nó cũng dài như sông, để rồi chú gom lại, chú ghi cho mày một cuốn...',
      'Khúc sông sau bao giờ cũng chảy xa hơn khúc sông trước.',
      'Chiến nói: Đã làm thân con gái ra đi thì tao chỉ có một câu: Nếu giặc còn thì tao mất, vậy à!',
      'Việt ghé vào khiêng một đầu. Nào, đưa má sang ở tạm bên chú, đến ngày thống nhất lại rước má về... Lòng Việt bỗng thấy thương chị lạ lùng.',
      'Cái ngón tay cái của Việt vẫn nhúc nhích được... Hễ mày động đậy là tao bắn!'
    ],
    artisticValues: [
      'Nghệ thuật trần thuật theo dòng tâm trạng nhân vật tự nhiên, độc đáo',
      'Khắc họa tính cách nhân vật Nam Bộ chân thực, sống động và đậm nét địa phương',
      'Ngôn ngữ Nam Bộ mộc mạc, giàu cảm xúc và sức sống'
    ],
    essayOutline: {
      introduction: 'Giới thiệu Nguyễn Thi - nhà văn của người nông dân Nam Bộ. Giới thiệu truyện ngắn "Những đứa con trong gia đình" và dòng sông truyền thống bất diệt.',
      body: [
        '1. Truyền thống đánh giặc kiên cường của gia đình Việt và Chiến.',
        '2. Hình tượng nhân vật Chiến - người chị đảm đang, gan góc mang hình bóng người má.',
        '3. Hình tượng nhân vật Việt - cậu em vô tư, tinh nghịch nhưng dũng cảm phi thường.',
        '4. Chi tiết hai chị em khiêng bàn thờ má sang gửi nhà chú Năm trước ngày ra trận.',
        '5. Đánh giá nghệ thuật trần thuật theo dòng ý thức của tác giả Nguyễn Thi.'
      ],
      conclusion: 'Khẳng định giá trị nhân văn sâu sắc: tình cảm gia đình hòa vào tình yêu quê hương đất nước làm nên sức mạnh chiến thắng.'
    },
    examPrompts: [
      'Phân tích tính cách nhân vật Chiến và Việt trong tác phẩm "Những đứa con trong gia đình".',
      'Cảm nhận chi tiết hai chị em khiêng bàn thờ má sang gửi nhà chú Năm trước ngày lên đường nhập ngũ.'
    ],
    keywords: [
      'Dòng sông truyền thống',
      'Chiến và Việt',
      'Khiêng bàn thờ má',
      'Cuốn sổ gia đình',
      'Chú Năm',
      'Nam Bộ kiên cường'
    ],
    audioText: 'Những đứa con trong gia đình của Nguyễn Thi ngợi ca chủ nghĩa anh hùng cách mạng của người dân Nam Bộ. Tình cảm ruột thịt thiêng liêng hòa vào tình yêu đất nước đã trở thành động lực bất khả chiến bại.'
  },
  {
    id: 'ong-gia-va-bien-ca',
    title: 'Ông già và biển cả',
    author: 'Ernest Hemingway',
    authorBio: 'Ernest Hemingway (1899 - 1961), đại văn hào người Mỹ, đoạt giải Nobel Văn học năm 1954. Tác giả của nguyên lý "tảng băng trôi" nổi tiếng: một phần nổi, bảy phần chìm dưới mặt nước.',
    year: '1952',
    genre: 'nuocngoai',
    genreName: 'Nước ngoài',
    tag: 'Văn học thế giới',
    readTimeMinutes: 11,
    summary: 'Cuộc chiến đấu đơn độc, quyết liệt của ông lão đánh cá Xan-ti-a-gô với con cá kiếm khổng lồ giữa biển khơi, biểu tượng cho sức mạnh và phẩm giá kiên cường của con người.',
    context: 'Viết năm 1952 tại Cuba, tác phẩm đỉnh cao đem về cho Hemingway giải Pulitzer (1953) và giải Nobel Văn học (1954).',
    mainThemes: [
      'Khát vọng chinh phục thiên nhiên và ước mơ cao đẹp của con người',
      'Ý chí kiên cường, bất khuất trước nghịch cảnh hiểm nghèo',
      'Tuyên ngôn về phẩm giá con người: "Con người không được sinh ra để dành cho thất bại"'
    ],
    keyAnalysis: [
      {
        heading: 'Nguyên lý tảng băng trôi của Hemingway',
        content: 'Tác phẩm có dung lượng ngắn gọn nhưng tầng ý nghĩa biểu tượng vô cùng phong phú: con cá kiếm là biểu tượng của cái đẹp và ước mơ; biển cả là môi trường thử thách; đàn cá mập là nghịch cảnh khắc nghiệt.'
      },
      {
        heading: 'Cuộc chiến đấu giữa ông lão và con cá kiếm',
        content: 'Xan-ti-a-gô vừa kính trọng vẻ đẹp kiêu dũng của đối thủ, vừa quyết tâm chinh phục nó bằng tất cả nghị lực và kinh nghiệm. Khi con cá kiếm lượn những vòng tròn quanh thuyền, ông lão dồn hết sức tàn phóng lao kết liễu nó.'
      },
      {
        heading: 'Thông điệp nhân văn vĩ đại',
        content: 'Dù đàn cá mập rỉa sạch thịt con cá kiếm chỉ còn trơ lại bộ xương trắng, ông lão vẫn trở về thanh thản với giấc mơ về những con sư tử châu Phi. Thất bại về vật chất nhưng chiến thắng rực rỡ về tinh thần.'
      }
    ],
    quotes: [
      'Con người không được sinh ra để dành cho thất bại. Con người có thể bị hủy diệt nhưng không thể bị đánh bại.',
      'Ta thương mày và rất kính trọng mày. Nhưng ta sẽ giết mày trước khi ngày hôm nay kết thúc.',
      'Nó lượn một vòng thật rộng... Ông lão cảm thấy choáng váng nhưng vẫn dồn hết sức tàn kéo ghì sợi dây thừng...',
      'Ông già đang mơ về những con sư tử bờ biển châu Phi...'
    ],
    artisticValues: [
      'Áp dụng mẫu mực nguyên lý "tảng băng trôi" với tầng nghĩa ẩn dụ sâu rộng',
      'Nghệ thuật độc thoại nội tâm và đối thoại với đối thủ thiên nhiên độc đáo',
      'Ngôn ngữ hàm súc, giản lược tối đa nhưng giàu sức biểu cảm'
    ],
    essayOutline: {
      introduction: 'Giới thiệu Ernest Hemingway và nguyên lý "tảng băng trôi". Giới thiệu tiểu thuyết "Ông già và biển cả" và thông điệp bất tử về ý chí con người.',
      body: [
        '1. Hình tượng con cá kiếm - biểu tượng của vẻ đẹp kỳ vĩ và ước mơ chinh phục.',
        '2. Cuộc chiến đấu đơn độc của ông lão Xan-ti-a-gô với con cá kiếm giữa biển khơi.',
        '3. Ý nghĩa tư tưởng câu nói: "Con người không được sinh ra để dành cho thất bại".',
        '4. Đánh giá nghệ thuật "tảng băng trôi" và biểu tượng bộ xương cá kiếm cùng giấc mơ sư tử.'
      ],
      conclusion: 'Khẳng định chân lý: Tôn vinh vẻ đẹp phẩm giá và bản lĩnh bất khuất của con người trước vũ trụ bao la.'
    },
    examPrompts: [
      'Phân tích ý nghĩa biểu tượng của hình tượng con cá kiếm trong đoạn trích "Ông già và biển cả".',
      'Bình luận câu nói nổi tiếng của nhân vật Xan-ti-a-gô: "Con người không được sinh ra để dành cho thất bại".'
    ],
    keywords: [
      'Xan-ti-a-gô',
      'Cá kiếm',
      'Tảng băng trôi',
      'Không sinh ra cho thất bại',
      'Nobel Văn học',
      'Giấc mơ sư tử'
    ],
    audioText: 'Ông già và biển cả của Hemingway là bản tụng ca phẩm giá loài người. Dù đối mặt với sóng to gió lớn và nghịch cảnh trớ trêu, con người có thể bị hủy diệt nhưng không bao giờ chịu khuất phục thất bại.'
  },
  {
    id: 'thuoc',
    title: 'Thuốc',
    author: 'Lỗ Tấn',
    authorBio: 'Lỗ Tấn (1881 - 1936), nhà văn cách mạng kiệt xuất của Trung Quốc hiện đại. Ông từ bỏ nghề y để cầm bút chữa căn bệnh tinh thần u mê, lạc hậu của quốc dân.',
    year: '1919',
    genre: 'nuocngoai',
    genreName: 'Nước ngoài',
    tag: 'Văn học thế giới',
    readTimeMinutes: 12,
    summary: 'Tác phẩm phê phán căn bệnh mê tín, ngu muội của nhân dân Trung Hoa qua phương thuốc bánh bao tẩm máu người, đồng thời bày tỏ nỗi xót xa cho những người chiến sĩ cách mạng tiên phong.',
    context: 'Sáng tác năm 1919, in trong tập "Gào thét" (1923), đúng vào thời kỳ phong trào Ngũ Tứ bùng nổ tại Trung Quốc.',
    mainThemes: [
      'Căn bệnh ngu muội, mê tín dị đoan của quần chúng nhân dân',
      'Bi kịch cô độc, không được quần chúng thấu hiểu của người chiến sĩ cách mạng Hạ Du',
      'Niềm hy vọng vào sự thức tỉnh của thế hệ tương lai qua hình ảnh vòng hoa trên mộ'
    ],
    keyAnalysis: [
      {
        heading: 'Chiếc bánh bao tẩm máu người - Vị thuốc quái đản',
        content: 'Vợ chồng lão Hoa Thuyên gom góp tiền mua chiếc bánh bao tẩm máu người tử tù (Hạ Du) về chữa bệnh lao cho con trai Thằng Thuyên. Chiếc bánh bao là biểu tượng của sự ngu muội, mê muội ghê rợn của nhân dân.'
      },
      {
        heading: 'Quán trà - Bức tranh thu nhỏ của xã hội Trung Hoa u uất',
        content: 'Những cuộc bàn tán xôn xao tại quán trà về Hạ Du: người ta xem anh là kẻ điên, mua máu anh làm thuốc, tố cáo anh để lấy tiền thưởng. Xã hội vô cảm, tê liệt trước sự hy sinh của người chiến sĩ giải phóng.'
      },
      {
        heading: 'Nghĩa địa mùa thanh minh và vòng hoa hy vọng',
        content: 'Bà mẹ Thằng Thuyên và mẹ Hạ Du gặp nhau trong đau xót. Hình ảnh vòng hoa cài trên mộ Hạ Du thể hiện niềm tin thầm kín của Lỗ Tấn vào sự thức tỉnh của quần chúng và tương lai cách mạng.'
      }
    ],
    quotes: [
      'Lão Hoa Thuyên nắm chặt chiếc bánh bao tẩm máu, cảm thấy như đang nắm sự sống của con mình trong tay...',
      'Thằng ấy điên thật rồi! Ở trong tù mà còn dám rủ cả cai ngục làm giặc!',
      'Trên nấm mộ Hạ Du có một vòng hoa, hoa trắng hoa đỏ xen lẫn, không biết ai đã đặt lên từ lúc nào...',
      'Người Trung Hoa cần một thứ thuốc để chữa lành căn bệnh tinh thần tê liệt hơn là thể xác.'
    ],
    artisticValues: [
      'Không gian, thời gian u ám, cô đọng giàu tính biểu tượng',
      'Nghệ thuật xây dựng chi tiết đắt giá, kết cấu hai tuyến nhân vật song song',
      'Ngòi bút giải phẫu xã hội lạnh lùng mà chan chứa nỗi niềm trắc ẩn'
    ],
    essayOutline: {
      introduction: 'Giới thiệu Lỗ Tấn - danh nhân văn hóa thế giới. Giới thiệu truyện ngắn "Thuốc" và mục đích cầm bút thức tỉnh tinh thần quốc dân Trung Hoa.',
      body: [
        '1. Ý nghĩa nhan đề tác phẩm "Thuốc" và hình ảnh chiếc bánh bao tẩm máu người.',
        '2. Sự vô cảm của quần chúng qua những câu chuyện bàn tán tại quán trà.',
        '3. Bi kịch cô đơn của người chiến sĩ cách mạng Hạ Du.',
        '4. Ý nghĩa cảnh gặp gỡ ở nghĩa địa và vòng hoa trên mộ Hạ Du.',
        '5. Đánh giá giá trị thức tỉnh và nghệ thuật biểu tượng sâu sắc.'
      ],
      conclusion: 'Khẳng định tác phẩm là hồi chuông thức tỉnh nhân loại về căn bệnh mê muội và tinh thần vô cảm.'
    },
    examPrompts: [
      'Phân tích ý nghĩa nhan đề tác phẩm "Thuốc" của Lỗ Tấn.',
      'Ý nghĩa biểu tượng của hình ảnh chiếc bánh bao tẩm máu người và vòng hoa trên mộ Hạ Du.'
    ],
    keywords: [
      'Bánh bao tẩm máu',
      'Hạ Du',
      'Quán trà',
      'Vòng hoa trên mộ',
      'Thức tỉnh quốc dân',
      'Bệnh tinh thần'
    ],
    audioText: 'Truyện ngắn Thuốc của Lỗ Tấn là liều thuốc đắng thức tỉnh tinh thần xã hội Trung Quốc thời cận đại. Tác phẩm cảnh báo về sự vô cảm, mê muội và đặt niềm tin vào sự thức tỉnh của thế hệ mai sau.'
  },
  ...CURRICULUM_12_NEW_WORKS,
];
