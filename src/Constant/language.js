const languages = {
  vi: {
    status: 'vi',
    // Language
    English: 'Tiếng anh',
    Vietnamese: 'Tiếng việt',
    System: 'Hệ thống',
    // Common
    Or: 'hoặc',
    Back: 'Trở về',
    Password: 'Mật khẩu',
    OldPass: 'Mật khẩu cũ',
    NewPass: 'Mật khẩu mới',
    Name: 'Họ tên',
    Email: 'Email',
    Phone: 'Điện thoại',
    NoCourses: 'Không có khóa học nào',
    Courses: 'Các khóa học',
    VerifyDesc: 'Chúng tôi đã gửi liên kết xác nhận về email của bạn. Vui lòng kiểm tra hộp thư!',
    TCDesc: 'Bằng việc nhấn chọn đăng ký tài khoản, bạn đã đồng ý các điều khoản của hệ thống chúng tôi',
    // Authen
    SignIn: 'Đăng nhập',
    SignUp: 'Đăng ký hệ thống',
    MSignUp: 'Đăng ký',
    ActiveAccount: 'Kích hoạt tài khoản',
    CreateAccount: 'Tạo tài khoản',
    ForgotPassAsk: 'Bạn quên mật khẩu ?',
    ForgotPass: 'Quên Mật Khẩu',
    ForgotPassDesc: 'Nhập Email đăng ký của bạn, và chúng tôi sẽ gửi link kích hoạt lại mật khẩu cho bạn qua email.',
    ConfirmPass: 'Xác nhận mật khẩu',
    ResetPass: 'Đặt lại mật khẩu',
    SignInDesc: 'Nhập thông tin gồm tên đăng nhập email và mật khẩu của bạn để đăng nhập vào hệ thống.',
    SignUpDesc: 'Nhập thông tin gồm tên đăng nhập, mật khẩu, email, số điện thoại của bạn để đăng ký vào hệ thống.',
    SignInGoogle: 'Đăng nhập với Google',
    SendEmail: 'Gửi email',
    // ReturnLogin: 'Quay lại màn hình Đăng nhập',
    Activate: 'Kích Hoạt',
    CancelActive: 'Huỷ Kích Hoạt',
    ActiveDesc: 'Nhập Email đăng ký của bạn, chúng ta sẽ kích hoạt tài khoản cho bạn.',
    ActiveAccountTitle: 'Kích Hoạt Tài Khoản',
    // Main tab
    Home: 'Trang chủ',
    Favorite: 'Yêu thích',
    Browse: 'Khám phá',
    Search: 'Tìm kiếm',
    Author: 'Giảng viên',
    // Home
    Recommended: 'Có thể bạn quan tâm',
    NewCourses: 'Các khóa học mới',
    TopSell: 'Bán chạy nhất',
    TopRate: 'Đánh giá cao nhất',
    SeeAll: 'Tất cả',
    // Browse
    TopCategory: 'Danh mục nổi bật',
    TopAuthor: 'Giảng viên hàng đầu',
    NewRelease: 'MỚI NHẤT',
    RecommendedForYou: 'GỢI Ý CHO BẠN',
    AuthorDetail: 'Thông tin Giảng viên',
    CategoryDetail: 'Thông tin Danh mục',
    // Tìm kiếm
    PopularSearch: 'Tìm kiếm phổ biến',
    RecentSearch: 'Tìm kiếm gần đây',
    // Author
    Student: 'học viên',
    NoUpdate: 'Không có cập nhật',
    Skill: 'Kỹ năng',
    // Profile
    Profile: 'Tài khoản',
    UpdateInfo: 'Cập nhật thông tin',
    ChangeEmail: 'Thay đổi email',
    ChangeEmailDesc: 'Nhập email mới. Chúng tôi sẽ gửi liên kết về email mới để xác nhận việc thay đổi này.',
    ChangePassword: 'Đổi mật khẩu',
    ChangeLanguage: 'Đổi ngôn ngữ',
    Signout: 'Đăng xuất',
    Update: 'Cập nhật',
    Save: 'Lưu thay đổi',
    UpdateAvatar: 'Chỉnh sửa hình ảnh',
    // Course Detail
    Like: 'Yêu thích',
    Share: 'Chia sẻ',
    Download: 'Tải xuống',
    RelatedCourses: 'Các khóa học cùng chủ đề',
    Rate: 'Đánh giá',
    Payment: 'Oops, đây là khóa học tính phí. Bạn cần thanh toán để có thể tham gia khóa học này!',
    Buy: 'Mua ngay',
    // Course
    NoAuthorInfo: 'Không có thông tin giảng viên',
    Free: 'Miễn phí',

    // Setting
    Setting: 'Cài đặt',
    SettingTheme: 'Chế độ xem',
    SettingLang: 'Ngôn ngữ',
    ChangeTheme: 'Chế độ xem',
    ChangeLang: 'Ngôn ngữ',
    Light: 'Sáng',
    Dark: 'Tối',

    // Messages
    EmailNotEmpty: 'Email không được để trống.',
    EmalInValid: 'Email không đúng hợp lệ, vui lòng nhập lại!',
    ActiveError: 'Tài khoản của bạn đã được kích hoạt hoặc tài khoản không tồn tại',
    ActiveSucess: 'Gửi email kích hoạt tài khoản thành công. Vui lòng kiểm tra hộp thoại email để xác nhận kích hoạt tài khoản.',
    PhoneInValid: 'Số điện thoại không hợp lệ, vui lòng nhập lại!',
    UploadAvatarSuccess: 'Tải lên hình ảnh thành công!',
    UploadAvatarError: 'Đã có lỗi xảy ra khi tải lên hình ảnh, vui lòng kiểm tra lại!',
    InfomationRequires: 'Vui lòng nhập đầy đủ thông tin',
    SignInError: 'Đăng nhập thất bại, email hoặc mật khẩu không hợp lệ hoặc chưa kích hoạt tài khoản.',
    ForgotPassError: 'Đã xảy ra lỗi khi gửi email hoặc email chưa đăng ký',
    ForgotPassSucess: 'Email đã được gửi đi, bạn vui lòng mở email để tiến hành thay đổi mật khẩu.',
    SignUpSucess: 'Đăng ký thành công!',
    SignUpFail: 'Đăng ký thất bại, email hoặc số điện thoại đã được sử dụng.',
  },
  eng: {
    status: 'eng',
    // Language
    English: 'English',
    Vietnamese: 'Vietnamese',
    System: 'System',
    // Common
    Or: 'or',
    Back: 'Back',
    Password: 'Password',
    OldPass: 'Old Password',
    NewPass: 'New Password',
    Name: 'Full name',
    Email: 'Email',
    Phone: 'Phone',
    NoCourses: 'No course found',
    Courses: 'Courses',
    VerifyDesc: 'We have already sent the link to your email. Please check the inbox!',
    TCDesc: 'By clicking sign up, yyou agree to our Terms of Use and Privacy Policy.',
    // Authen
    SignIn: 'Sign in',
    SignUp: 'Subscribe to Application',
    MSignUp: 'Sign up',
    ActiveAccount: 'Activate your account',
    CreateAccount: 'Create Account',
    ForgotPassAsk: 'Forgot your password ?',
    ForgotPass: 'Forgot Password',
    ConfirmPass: 'Confirm password',
    ForgotPassDesc: 'Enter an email associated with your account. We will send you a link to reset your password.',
    ResetPass: 'Reset',
    SignInDesc: 'Enter information including your email username and password to log into the system.',
    SignUpDesc: 'Enter information including username, password, email, phone number to register in the system.',
    SignInGoogle: 'Sign in with Google',
    SendEmail: 'Send email',
    ReturnLogin: 'Return Login',
    Activate: 'Active',
    CancelActive: 'Cancel Active',
    ActiveDesc: 'Enter your registered email, we will activate your account.',
    ActiveAccountTitle: 'Active Account',
    // Main tab
    Home: 'Home',
    Favorite: 'Favorite',
    Browse: 'Browse',
    Search: 'Search',
    Author: 'Author',
    // Home
    Recommended: 'Recommend for you',
    NewCourses: 'New courses',
    TopSell: 'Best seller',
    TopRate: 'Top rate',
    SeeAll: 'See all',
    // Browse
    TopCategory: 'Top Categories',
    TopAuthor: 'Top authors',
    NewRelease: 'NEW RELEASE',
    RecommendedForYou: 'RECOMMENDED FOR YOU',
    AuthorDetail: 'Lecturer Information',
    CategoryDetail: 'Category Information',
    // Tìm kiếm
    PopularSearch: 'Popular search',
    RecentSearch: 'Recent',
    // Author
    Student: 'student(s)',
    NoUpdate: 'No update',
    Skill: 'Skill',
    // Profile
    Profile: 'Account',
    UpdateInfo: 'Update information',
    ChangeEmail: 'Change email',
    ChangeEmailDesc: 'Enter a new email. We will sent a link to this email for comfirming this change.',
    ChangePassword: 'Change password',
    ChangeLanguage: 'Change language',
    Signout: 'Sign out',
    Update: 'Update',
    Save: 'Save',
    UpdateAvatar: 'Update avatar',
    // Course Detail
    Like: 'Like',
    Share: 'Share',
    Download: 'Download',
    RelatedCourses: 'Related courses',
    Rate: 'Rate',
    Payment: 'Oops, this course is not free. You need to pay before joining this course!',
    Buy: 'Buy now',
    // Course
    NoAuthorInfo: 'No author\'s info',
    Free: 'Free',

    // Setting
    Setting: 'Setting',
    SettingTheme: 'Themes',
    SettingLang: 'Languages',
    ChangeTheme: 'Themes',
    ChangeLang: 'Languages',
    Light: 'Light',
    Dark: 'Dark',

    // Message
    EmailNotEmpty: 'Email cannot be empty.',
    EmalInValid: 'Invalid email, please enter again!',
    ActiveError: 'Your account is activated or your account does not exist',
    ActiveSucess: 'Email successful account activation. Please check your email to confirm account activation.',
    PhoneInValid: 'Invalid phone, please enter again!',
    UploadAvatarSuccess: 'Upload avatar successfully!',
    UploadAvatarError: 'There was an error uploading the image, please check again!',
    InfomationRequires: 'Please enter all required information',
    SignInError: 'Login failed, email or password is invalid or account is not activated.',
    ForgotPassError: 'An error occurred while sending an email or an unregistered email.',
    ForgotPassSucess: 'Email has been sent, please open your email to proceed to change your password.',
    SignUpSucess: 'Successful registration!',
    SignUpFail: 'Registration failed, email or phone number is already in use.',

  },
};
export default languages;
