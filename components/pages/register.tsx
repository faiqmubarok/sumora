import Colors from "@/constants/colors";
import { UsePostRegister } from "@/features/auth/apis/use-post-register";
import RegisterForm from "@/features/auth/components/register-form";
import {
  RegisterFormSchema,
  registerFormSchema,
} from "@/features/auth/form/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Link from "../link";

export default function RegisterPage() {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const { mutate: register, isPending } = UsePostRegister({
    onSuccess: () => {
      console.log("Register successful");
      form.reset();
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const onSubmit = (data: RegisterFormSchema) => {
    console.log("Form submitted:", data);
    register(data);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <ImageBackground
        source={require("@/assets/images/background.png")}
        style={styles.background}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.wrapper}>
          {/* Header */}
          <View style={styles.header}>
            <Image
              width={36}
              height={36}
              style={styles.logo}
              alt="logo"
              source={require("@/assets/images/logo.png")}
            />
            <Text style={styles.title}>Sign up to Sumora</Text>
            <Text style={styles.subtitle}>
              Start protecting your water today. Create an account to monitor,
              analyze, and keep it safe—right from the start.
            </Text>
          </View>

          <View style={styles.formContainer}>
            <FormProvider {...form}>
              <RegisterForm onSubmit={onSubmit} />
            </FormProvider>
            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account?</Text>
              <Link href={"/login"} style={{ textDecorationLine: "underline" }}>
                Sign in
              </Link>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: Colors.WHITE,
    padding: 16,
    borderRadius: 12,
    gap: 20,
    shadowColor: "#C1C1C1",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  scrollContainer: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  background: {
    flex: 1,
  },
  imageStyle: {
    height: 500,
  },
  wrapper: {
    marginTop: 52,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  header: {
    marginBottom: 36,
  },
  logo: {
    marginHorizontal: "auto",
    marginBottom: 32,
  },
  title: {
    fontFamily: "DMSans-Medium",
    fontSize: 24,
    color: Colors.WHITE,
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: "DMSans-Regular",
    textAlign: "center",
    lineHeight: 16,
    color: Colors.WHITE,
    maxWidth: 320,
    marginHorizontal: "auto",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginHorizontal: "auto",
  },
  footerText: {
    fontSize: 14,
    fontFamily: "DMSans-Regular",
  },
});
