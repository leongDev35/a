// Muc dich: Ly Thuyet jS
// nguoi tao: Leo
// ngay tao: 12/1/2023

//! Scope 
Mặc định là Global Scope: khai báo bên ngoài các function, khả dụng với tát cả code trong tài liệu
Function scope: local variable, chỉ khả dụng bên trong function
Block scope: tạo với cặp ngoặc nhọn (1 khối lệnh) (let và const)
Var chỉ cục bộ với hàm or phạm vi toàn cầu mà khối nằm trong
//! Data type: 8 
    boolean
    null
    undefinded
    Number
    BigInt
    String
    Symbol
    Object
//!  Literal data type: đại diện cho giá trị cố định mà bạn cung cấp theo đúng nghĩa đen trong mẫ
    Array
    Boolean
    Numeric
    Object
    RegExp
    String
//! Falsy value type:
false 
undefined
null
0
NaN
the empty string ("")
//! câu lệnh xử lý ngoại lệ
    throw expression; // throw expression ném một ngoại lệ để xử lý, cói thể là bất cứ kiểu nào
    try...catch: bao gồm một khối try và 1 khối catch
        khối try chứa một hoặc nhiều câu lệnh được thực thi
        catch block xác định sẽ phải làm gì nếu một ngoại lệ được throw vào khối try
        khối finally chứa lệnh xử lý sau try...catch. Khối này sẽ thực thi bất kể có throw gì hay catch gì không
                    nếu finally trả về return thì sẽ đè hết giá trị return của try...catch
                    
//!  loop 
    //!câu lệnh có nhãn: labeled statements
      // nhãn markLoop được xác định cho vòng lặp while
      markLoop: while (theMark) {
        doSomething();
      }
      nếu dùng break có nhãn nó sẽ kết thúc câu lệnh có nhãn được chỉ định
    //! for..in duyệt qua tất cả properties có thể đếm được của một obj
      //nên nếu duyệt qua một mảng thì nó sẽ duyệt cả những property do mình thêm vào
    //! for..of  duyệt qua giá trị của thuộc tính
      //nếu duyệt qua mảng chỉ trả về giá trị của các thuộc tính, khác for..in
//! function 
    // pass một obj vào thì nếu function thay đổi thuộc tính thì khi gọi thuộc tính của obj đó sẽ thay đổi
    // tương tự với phần tử của một array
    //! khai báo bình thường
      function square(n) {
        return n*n;
      }
    //! khai báo ẩn danh
      const square = function (n) {
        return n *n; 
      } 
      // cũng có thể có tên
      const square = function sq(n) {
        return n < 2 ? 1 : n * sq(n - 1); //đệ quy 
      }
    //! hàm lồng nhau: Closure - Bao đóng
      // hàm bên ngoài không truy cập được các biên bên trong, hàm bên trong có thể truy cập được
      => cung cấp 1 kiểu của tính đóng gói cho các biến hàm bên trong
    //! arrow function luôn luôn ẩn danh, k có this của chính nó
//! object and Map compare 


//! Class 
      mỗi lần new là một instance được tạo // nên tránh
      //! ví dụ về 1 Class
      class MyClass {
        //! Constructor
        constructor() {
          // Constructor body
        }
        //! Instance field
        myField = "foo";
        //! Instance method
        myMethod() {
          // myMethod body
        }
        //! Static field
        static myStaticField = "bar";
        //! Static method
        static myStaticMethod() { //! static không thể truy cập được từ các instance
          // myStaticMethod body
          class Color {
            static isValid(r, g, b) {
              return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
            }
          }
          
          Color.isValid(255, 0, 0); // true
          Color.isValid(1000, 0, 0); // false

          console.log(new Color(0, 0, 0).isValid); // undefined //! không thể gọi từ một instance

        }
        //! Static block
        static {
          // Static initialization code
          //! thực thi  ngay lập tức khối code khi class được khai báo, khác biệt là chúng có thể truy cập được những static private properties
        }
        //! Fields, methods, static fields, and static methods all have
        //! "private" forms
        #myPrivateField = "bar";
      }
        //! kế thừa
          extends //!class nhận tất cả các PUBLIC (KHÔNG CÓ CÁC PRIVATE FIELDS) properties của parent class
                  //! chỉ có thể kế thừa từ một lớp
          class ColorWithAlpha extends Color {
            #alpha;
            constructor(r, g, b, a) {
              super(r, g, b); //! gọi đến hàm tạo của lớp cha để khởi tạo this.
                              //! tương đương với this = new Color(r,g,b)
              this.#alpha = a; //! private field
            }
            get alpha() {
              return this.#alpha;
            }
            set alpha(value) {
              if (value < 0 || value > 1) {
                throw new RangeError("Alpha value must be between 0 and 1");
              }
              this.#alpha = value;
            }
          }
//!  Using promises
