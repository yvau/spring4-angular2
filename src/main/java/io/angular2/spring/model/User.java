package io.angular2.spring.model;

        import java.io.Serializable;
        import javax.persistence.*;

/**
 * Created by Yvau on 1/18/2017.
 */
@Entity
@Table(name="users")
@NamedQuery(name="User.findAll", query="SELECT u FROM User u")
public class User implements Serializable {
    private static final long serialVersionUID = 1L;

    @TableGenerator(
            name="userGen",
            table="hibernate_sequences",
            pkColumnName="sequence_name",
            valueColumnName="next_val",
            pkColumnValue="userGenId",
            allocationSize=1)

    @Id
    @GeneratedValue(strategy=GenerationType.TABLE, generator="userGen")
    private Integer id;

    private String lastName;

    private String firstName;

    private String gender;

    private String email;

    private String phone;


    public User() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
